function attachEvents() {
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    btnLoadPosts.addEventListener('click', loadPostOptions)

    let btnViewPost = document.getElementById('btnViewPost');
    btnViewPost.addEventListener('click', viewPost)
}
let selectPosts = document.getElementById('posts');

function viewPost() {
    // {
    //     "id": "-MSgyQMjBNfYjW2m6r97",
    //     "postId": "-MSbypx-13fHPDyzNRtf",
    //     "text": "A very interesting post!"
    // }
    //let urlSelectedPost = `http://localhost:3030/jsonstore/blog/comments/${id}`;


    // "-MSgySbWEFw3rhCfIIns": {
    //     "id": "-MSgySbWEFw3rhCfIIns",
    //     "postId": "-MSbypx-13fHPDyzNRtf",
    //     "text": "Unit Testing is a useful testing technique in programming."
    // }
    let urlAllPosts = `http://localhost:3030/jsonstore/blog/comments`
    fetch(urlAllPosts)
        .then((response) => response.json())
        .then(createPost)
}

function createPost(data) {
    let postId = selectPosts.value;
    let id = Object.entries(data).fillter(([id, objCommentInfo]) =>{
        
    });
}

function loadPostOptions() {
    let urlPostsInfo = 'http://localhost:3030/jsonstore/blog/posts'
    fetch(urlPostsInfo)
        .then(response => response.json())
        .then(makeOptions)
}

function makeOptions(data) {
    let postsArr = Array.from(Object.entries(data))
    postsArr.map(([id, info]) => {
        let newOption = document.createElement('option');
        newOption.setAttribute('value', id)
        newOption.textContent = info.title;
        selectPosts.appendChild(newOption)
    })

}
attachEvents();
//debugger
