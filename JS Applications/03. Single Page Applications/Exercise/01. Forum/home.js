import { showDetails } from './topicInfo.js'

let newTopicForm = document.querySelector('#homeView form');
newTopicForm.addEventListener('submit', createNewTopic)

let main = document.getElementsByTagName('main')[0];

let homeSection = document.getElementById('homeView');
homeSection.remove()

export function showHome(e) {
    if (e) {
        e.preventDefault();
    }
    main.innerHTML = '';
    main.appendChild(homeSection)

    displayAllTopics()
}

function createNewTopic(event) {
    event.preventDefault()

    if (event.submitter.textContent == "Post") {
        let form = new FormData(newTopicForm);

        let topicName = form.get('topicName')
        let username = form.get('username')
        let postText = form.get('postText')
        let date = new Date();

        if (topicName == '' || username == '' || postText == '') {
            alert('Моля, попълнете всички полета!')
        } else {
            postNewTopic({ topicName, username, postText, date })    
            displayAllTopics()
        }        
    }
    newTopicForm.reset()
}

async function postNewTopic(body) {
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })
}

async function displayAllTopics() {
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts')
    let allTopicsObj = await response.json();

    let topicNameWrapper = document.getElementsByClassName('topic-container')[0];
    topicNameWrapper.innerHTML = '';
    Array.from(Object.values(allTopicsObj)).forEach(topicObj => {
        let div = document.createElement('div')
        div.classList.add('topic-name-wrapper')
        div.innerHTML = ` 
                            <div class="topic-name">
                                <a href="#" class="normal" topicID="${topicObj._id}">
                                    <h2>${topicObj.topicName}</h2>
                                </a>
                                <div class="columns">
                                    <div>
                                        <p>Date: <time>${topicObj.date}</time></p>
                                        <div class="nick-name">
                                            <p>Username: <span>${topicObj.username}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
        topicNameWrapper.appendChild(div)
     });
    let ancherTags = topicNameWrapper.getElementsByTagName('a');
    Array.from(ancherTags).forEach( a => {
        a.addEventListener('click', showDetails)})

}