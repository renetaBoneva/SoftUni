function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commits = document.getElementById('commits');

    const url = `https://api.github.com/repos/${username}/${repo}/commits`
    fetch(url)
        .then((response) => {
            if(response.ok != true){
                throw new Error(`${response.status}`)
            }
            return response.json()
        })
        .then((data) => displayCommits(data))
    .catch((err) => {
        let li = document.createElement('li');
        li.textContent = `Error: ${err.message} (Not Found)`;
        commits.innerHTML = '';
        commits.appendChild(li);
    })

    function displayCommits(data) {
        let uploads = data.map((el) => {
            let name = el.commit.author.name;
            let commit = el.commit.message;
            let li = document.createElement('li');
            li.textContent = `${name}: ${commit}`
           return li;
        })
        commits.replaceChildren(...uploads);
    }
}
