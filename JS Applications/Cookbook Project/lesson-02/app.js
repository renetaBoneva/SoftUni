function LoadAllRecipies() {
    const url = 'http://localhost:3030/jsonstore/cookbook/recipes';
    fetch(url)
        .then((response) => response.json())
        .then((data) => createRecipiesArticles(data))
        .catch((e) => { })
}
function createRecipiesArticles(data) {
    let main = document.querySelector('main');
    main.innerHTML = '';
    for (let el of Object.values(data)) {
        let article = document.createElement('article');
        article.addEventListener("click", loadSelectedRecipe)
        article.classList.add('preview');
        article.setAttribute('id', el._id);

        let titleDiv = document.createElement('div')
        titleDiv.classList.add('title')
        let h2 = document.createElement('h2');
        h2.textContent = el.name;
        titleDiv.appendChild(h2);
        article.appendChild(titleDiv);

        let imgDiv = document.createElement('div')
        imgDiv.setAttribute('class', 'small');
        let img = document.createElement('img')
        img.setAttribute('src', el.img)
        imgDiv.appendChild(img)
        article.appendChild(imgDiv)

        main.appendChild(article)
    }
}

function loadSelectedRecipe(event) {
    let clickedEl = event.target;
    let id = clickedEl.id;
    while (clickedEl.nodeName !== "ARTICLE") {
        clickedEl = clickedEl.parentNode;
        id = clickedEl.id;
    }

    const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => showRecipe(data))

    function showRecipe(data) {
        let result = e('article', {},
            e('h2', {}, data.name),
            e('div', { className: "band" },
                e('div', { className: "thumb" },
                    e('img', { src: data.img })),
                e('div', { className: 'ingredients' },
                    e('h3', {}, 'Ingredients:'),
                    e('ul', {}, data.ingredients.map(ingredient => e('li', {}, ingredient))))),
            e('div', { className: 'description' },
                e('h3', {}, 'Preparation:'),
                data.steps.map(step => e('p', {}, step)))
        )
        clickedEl.replaceWith(result)
    }
}

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [atr, value] of Object.entries(attributes)) {
        if (atr.substring(0, 2) == 'on') {
            result.addEventListener(atr.substring(2).toLocaleLowerCase(), value)
        } else {
            result[atr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), [])

    content.forEach((e) => {
        if (typeof e == 'string' || typeof e == 'number') {
            let textNode = document.createTextNode(e);
            result.appendChild(textNode);
        } else {
            result.appendChild(e)
        }
    })
    return result;
}
