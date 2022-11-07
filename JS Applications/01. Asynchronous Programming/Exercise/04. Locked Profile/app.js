function lockedProfile() {

    let url = 'http://localhost:3030/jsonstore/advanced/profiles'
    fetch(url)
    .then((response) =>{
        if(response.ok == false){
            throw new Error();
        }
        return response.json()
    })
    .then(createProfiles)
}
function createProfiles(data){
    let main = document.getElementById('main');
    let profilesArr = Array.from(Object.values(data))
    let profileTemplateNodes = document.querySelector('.profile');
    main.innerHTML = '';
    profilesArr.map(profileInfo => {
        let currentProfile = profileTemplateNodes.cloneNode(true);
        let usernameAndAgeFields = Array.from(currentProfile.querySelectorAll('input[type="text"]'))
        let emailFields = currentProfile.querySelector('input[type="email"]')
        
        usernameAndAgeFields[0].value = profileInfo.username;
        usernameAndAgeFields[1].value = profileInfo.age;
        emailFields.value = profileInfo.email;

        let showMoreBlock = currentProfile.querySelector('.userUsername');
        showMoreBlock.style.display = 'none';

        let showMoreBth = currentProfile.querySelector('button');
        showMoreBth.addEventListener('click', showMoreInfo)
        main.appendChild(currentProfile);
    })

}

function showMoreInfo(event) {
    let profile = event.target.parentNode;
    let clickedBtn = event.target;
    
    let lockRadioBtn = profile.querySelector('input[value="lock"]');
    if (lockRadioBtn.checked == true) {
        return;
    }
    if(clickedBtn.textContent === 'Show more'){
        clickedBtn.textContent = 'Hide it';
        let showMoreBlock = profile.querySelector('.userUsername');
        showMoreBlock.style.display = 'block';
    } else if(clickedBtn.textContent === 'Hide it'){  
        clickedBtn.textContent = 'Show more';
        let showMoreBlock = profile.querySelector('.userUsername');
        showMoreBlock.style.display = 'none';      
    }
}
