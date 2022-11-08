let selectPosts = document.getElementById('posts');
let postId;
let urlAllPosts = 'http://localhost:3030/jsonstore/blog/posts'
let urlAllComments = `http://localhost:3030/jsonstore/blog/comments`
let selectedPostInfo;
let selectedPostComments;

function attachEvents() {
    let btnLoadPosts = document.getElementById('btnLoadPosts');
    btnLoadPosts.addEventListener('click', loadPostOptions)

    let btnViewPost = document.getElementById('btnViewPost');
    btnViewPost.addEventListener('click', viewPost)
}

async function viewPost() {
    let response = await fetch(urlAllComments);
    let data = await response.json();
    await getComments(data)
    // fetch(urlAllComments)
    //     .then((response) => response.json())
    //     .then(getComments)


    let responseAllPosts = await fetch(urlAllPosts);
    let dataAllPosts = await responseAllPosts.json();
    await getPostInfo(dataAllPosts)
    // fetch(urlAllPosts)
    //     .then((response) => response.json())
    //     .then(getPostInfo)

    let h1 = document.getElementById('post-title');
    h1.textContent = selectedPostInfo.title;

    let p = document.getElementById('post-body')
    p.textContent = selectedPostInfo.body

    let commentsUl = document.getElementById('post-comments');
    commentsUl.innerHTML = '';
    selectedPostComments.map((comment) => {
        let li = document.createElement('li')
        li.textContent = comment;
        commentsUl.appendChild(li)
    })

}

function getPostInfo(data) {
    let postsArr = Array.from(Object.entries(data));
    let currentPostInfo = postsArr.filter(([currentPostId, postInfo]) => {
        return currentPostId == postId;
    })

    selectedPostInfo = currentPostInfo[0][1];
}

function getComments(data) {
    selectPosts = document.getElementById('posts');
    postId = selectPosts.value;
    let comments = [];

    comments = Object.entries(data)
        .filter(([id, objCommentInfo]) => {
            return objCommentInfo.postId == postId;
        })
        .map(([id, infoObj]) => {
            return infoObj.text
        });

    selectedPostComments = comments;
}

function loadPostOptions() {
    fetch(urlAllPosts)
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
