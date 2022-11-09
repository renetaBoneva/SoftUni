let mainSection = document.getElementById('main');

function solution() {
    let urlTitles = 'http://localhost:3030/jsonstore/advanced/articles/list'
    fetch(urlTitles)
        .then((response) => {
            if (response.ok == false && response.code != '204') {
                throw new Error();
            }
            return response.json()
        })
        .then(createArticle)
}

function createArticle(data) {
    let articleTitlesArr = Array.from(data);
    articleTitlesArr.forEach(el => {
        let accordionDiv = document.createElement('div');
        accordionDiv.setAttribute('class', 'accordion');
        accordionDiv.setAttribute('_id', el._id);

        let headDiv = document.createElement('div');
        headDiv.setAttribute('class', 'head');

        let spanTitle = document.createElement('span');
        spanTitle.textContent = el.title;

        let button = document.createElement('button');
        button.setAttribute('class', 'button');
        button.setAttribute('_id', el._id);
        button.textContent = 'More'
        button.addEventListener('click', onLoadInfo)

        headDiv.appendChild(spanTitle);
        headDiv.appendChild(button);
        accordionDiv.appendChild(headDiv);

        let extraClass = document.createElement('div');
        extraClass.setAttribute('class', 'extra');
        extraClass.style.display = 'none';

        let p = document.createElement('p');

        extraClass.appendChild(p);
        accordionDiv.appendChild(extraClass);

        mainSection.appendChild(accordionDiv);
    })

    async function onLoadInfo(event) {
        if (event.target.textContent == 'More') {
            event.target.textContent = 'Less'
            let id = event.target.getAttribute('_id');
            let info;

            let urlMoreInfo = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`
            let response = await fetch(urlMoreInfo)
            let data = await response.json();

            let divArticle = event.target.parentNode.parentNode;
            let extraDiv = divArticle.getElementsByClassName("extra")[0];
            extraDiv.style.display = 'block';

            let p = extraDiv.querySelector('p');
            p.textContent = data.content;
        } else {            
            event.target.textContent = 'More'
            let divArticle = event.target.parentNode.parentNode;
            let extraDiv = divArticle.getElementsByClassName("extra")[0];
            extraDiv.style.display = 'none';
        }
    }

}
//debugger
solution()
