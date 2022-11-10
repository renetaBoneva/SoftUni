let url = 'http://localhost:3030/jsonstore/messenger';

function attachEvents() {
    let sendBtn = document.getElementById('submit')
    sendBtn.addEventListener('click', readCommentInfo)

    let refreshBtn = document.getElementById('refresh')
    refreshBtn.addEventListener('click', getComments)
}
function readCommentInfo() {
    let author = document.querySelector('input[name="author"]').value;
    document.querySelector('input[name="author"]').value = '';
    let message = document.querySelector('input[name="content"]').value;
    document.querySelector('input[name="content"]').value = '';

    postCommentInfo({ author, "content": message })
}

async function postCommentInfo(body) {
    let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(body)
    })

    let authToken = response.json();
    sessionStorage.setItem('authToken', authToken)

    await getComments()
}

async function getComments() {
    let response = await fetch(url);
    let comments = await response.json();
    showComments(comments)
}

function showComments(comments) {
    let commentsArray = Array.from(Object.values(comments));
    let commentsArea = document.querySelector('textarea');
    commentsArea.textContent = '';
    let result = []
    commentsArray.forEach(c => {
        result.push(`${c.author}: ${c.content}`)
    })
    commentsArea.textContent = result.join('\n');
}
attachEvents();
