function loadRepos() {
	let input = document.getElementById('username').value;
	let reposList = document.getElementById('repos');
	reposList.innerHTML = '';


	const url = `https://api.github.com/users/${input}/repos`;
	fetch(url)
		.then((response) => {
			console.log(response);
			if (response.ok == false) {				
				throw new Error(`Error: ${response.status} ${response.statusText}`);
			}
			return response.json()
		})
		.then((data) => getRepositories(data))
		.catch((e) => {
			console.log(e);
			let li = document.createElement('li');
			li.textContent = e.message;
			reposList.appendChild(li);
		})

	function getRepositories(data) {
		for (let el in data) {
			let line = data[el];
			let name = line["full_name"];
			let link = line["html_url"];

			let li = document.createElement('li');
			let a = document.createElement('a');
			a.setAttribute('href', link);
			a.textContent = name;
			li.appendChild(a);
			reposList.appendChild(li)
		}
	}
} 
