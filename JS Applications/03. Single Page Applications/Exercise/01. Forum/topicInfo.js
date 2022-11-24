let selectedTopicView = document.getElementById('selectedTopicView');

let answerForm =  document.querySelector('.answer-comment form');
answerForm.addEventListener('submit', getFormInfo)

selectedTopicView.remove()

let main = document.getElementsByTagName('main')[0];

export function showDetails(event) {
    let anchor = event.target.parentNode;
    let topicID = anchor.getAttribute('topicID');
    answerForm.setAttribute('topicID', topicID)

    getCurrentTopicInfo(topicID)
    main.replaceChildren(selectedTopicView);
}

async function getCurrentTopicInfo(topicID){
    let response = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts/${topicID}`)
    let postInfo = await response.json()
    createCurrentTopicView(postInfo, topicID);
}

function createCurrentTopicView(postInfo, topicID){
    let h2Title = document.querySelector('.theme-name-wrapper h2');
    h2Title.textContent = postInfo.topicName;

    let usernameBlock = document.querySelector('.comment .header p span');
    usernameBlock.textContent = postInfo.username;

    let timeBlock = document.querySelector('.comment .header p time');
    timeBlock.textContent = postInfo.date;

    let postText = document.querySelector('.comment .header p.post-content');
    postText.textContent = postInfo.postText;
    loadAllComments(topicID)
}


function getFormInfo(event){
    event.preventDefault()
    let form = new FormData(answerForm);

    let username = form.get('username')
    let postText = form.get('postText')
    let date = new Date()
    let topicID = answerForm.getAttribute('topicID');

    if(username == "" || postText == ""){
        alert('Моля, попълнете всички полета!')
    } else{
        postNewAnswer({username, postText, date, topicID})
    }

    answerForm.reset()
    loadAllComments(topicID);
}

async function postNewAnswer(body){
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(body)
    })
}

async function loadAllComments(topicID){
    let response = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments')
    if(response.status != '200'){
        createAnswersNodes([]);
    } else{
        let allComments = await response.json();
        let currentTopicComments = Array.from(Object.values(allComments))
                                            .filter(cObj => cObj.topicID ==  topicID)
    
        createAnswersNodes(currentTopicComments);
    }
}

function createAnswersNodes(currentTopicComments){
    let userComments = document.querySelector('#user-comment');
    userComments.innerHTML = '';

    currentTopicComments.forEach(answerObj => {
        let wrapperDiv= document.createElement('div');
        wrapperDiv.classList.add('topic-name-wrapper')
        let div = document.createElement('div');
        div.classList.add('topic-name')

        div.innerHTML = `
        <p><strong>${answerObj.username}</strong> commented on <time>${answerObj.date}</time></p>
        <div class="post-content">
            <p>${answerObj.postText}.</p>
        </div>`
        
        wrapperDiv.appendChild(div)
        userComments.appendChild(wrapperDiv)
    });

}