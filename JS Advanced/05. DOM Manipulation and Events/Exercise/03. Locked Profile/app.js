function lockedProfile() {
    let profiles = Array.from(document.querySelectorAll('.profile'));
    
    for(let profile of  profiles){
        
        let showMoreBtn = profile.getElementsByTagName('button')[0];
        showMoreBtn.addEventListener('click', showMore)
        
    }

    function showMore(event){
        let showMoreBtn = event.target;
        let profile = showMoreBtn.parentElement;
        let radioBtns = Array.from(profile.querySelectorAll('input[type=radio]'));

        if(radioBtns[1].checked === true) {
            if(showMoreBtn.innerText === 'Hide it'){
                profile.querySelector('div').style.display = 'none'; 
                showMoreBtn.innerText = 'Show more';     
            } else if(showMoreBtn.innerText === 'Show more'){
                profile.querySelector('div').style.display = 'block'; 
                showMoreBtn.innerText = 'Hide it';               
            }
        }
    }

}
