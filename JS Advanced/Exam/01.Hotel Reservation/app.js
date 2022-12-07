window.addEventListener('load', solve);

function solve() {
    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let checkIn = document.getElementById('date-in');
    let checkOut = document.getElementById('date-out');
    let guests = document.getElementById('people-count');


    let firstNValue = firstName.value;
    let lasttNValue = lastName.value;
    let inDateValue = checkIn.value;
    let outDateValue = checkOut.value;
    let guestsValue = guests.value;

    let nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener('click', getInfo)
    let infoList = document.getElementsByClassName('info-list')[0];
    let confirmList = document.getElementsByClassName('confirm-list')[0];
    let statusH1 = document.getElementById('verification')


    function getInfo(event) {
        event.preventDefault();
        firstNValue = firstName.value;
        lasttNValue = lastName.value;
        inDateValue = checkIn.value;
        outDateValue = checkOut.value;
        guestsValue = guests.value;

        if (firstNValue == '' || lasttNValue == '' || inDateValue == '' ||
            outDateValue == '' || guestsValue == '') {
            return;
        }

        if (new Date(inDateValue) > new Date(outDateValue)) { 
            return;
        }

        createReservationInfo(firstNValue, lasttNValue, inDateValue, outDateValue, guestsValue)

        firstName.value = "";
        lastName.value = "";
        checkIn.value = "";
        checkOut.value = "";
        guests.value = "";
        event.target.disabled = true;
    }

    function createReservationInfo() {
        let li = document.createElement('li');
        li.classList.add('reservation-content')
        let article = document.createElement('article')

        let h3 = document.createElement('h3')
        h3.textContent = `Name: ${firstNValue} ${lasttNValue}`
        let pFrom = document.createElement('p')
        pFrom.textContent = `From date: ${inDateValue}`
        let pTo = document.createElement('p')
        pTo.textContent = `To date: ${outDateValue}`
        let pGuests = document.createElement('p')
        pGuests.textContent = `For ${guestsValue} people`

        article.appendChild(h3)
        article.appendChild(pFrom)
        article.appendChild(pTo)
        article.appendChild(pGuests)
        li.appendChild(article)

        let editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.classList.add('edit-btn')
        editBtn.addEventListener('click', handleEdit)
        li.appendChild(editBtn)

        let continueBtn = document.createElement('button')
        continueBtn.textContent = 'Continue'
        continueBtn.classList.add('continue-btn')
        continueBtn.addEventListener('click', handleContinue)
        li.appendChild(continueBtn)

        infoList.appendChild(li)
    }

    function handleEdit(event) {
        let li = event.target.parentNode;

        firstName.value = firstNValue;
        lastName.value = lasttNValue;
        checkIn.value = inDateValue;
        checkOut.value = outDateValue;
        guests.value = guestsValue;


        nextBtn.disabled = false;
        li.remove()

    }

    function handleContinue(event) {
        let li = event.target.parentNode;
        let btns = li.querySelectorAll('button')
        btns[1].remove()
        btns[0].remove()

        let confirmBtn = document.createElement('button')
        confirmBtn.textContent = 'Confirm'
        confirmBtn.classList.add('confirm-btn')
        confirmBtn.addEventListener('click', handleConfirm)
        li.appendChild(confirmBtn)

        let cancelBtn = document.createElement('button')
        cancelBtn.textContent = 'Cancel'
        cancelBtn.classList.add('cancel-btn')
        cancelBtn.addEventListener('click', handleCancel)
        li.appendChild(cancelBtn)

        confirmList.appendChild(li)
        nextBtn.disabled = true;
    }

    function handleConfirm(event) {

        let li = event.target.parentNode;
        li.remove()

        if (statusH1.textContent === 'Cancel') {
            statusH1.classList.remove('reservation-cancelled')
        } else if (statusH1.textContent === 'Confirm') {
            return;
        } 

        statusH1.classList.add('reservation-confirmed')
        statusH1.textContent = 'Confirmed.'
        nextBtn.disabled = false;
    }

    function handleCancel(event) {
        
        let li = event.target.parentNode;
        li.remove()

        if (statusH1.textContent === 'Confirm') {
            statusH1.classList.remove('reservation-confirmed')
        } else if (statusH1.textContent === 'Cancel') {
            return;
        } 
        
        statusH1.classList.add('reservation-cancelled')
        statusH1.textContent = 'Cancelled.'
        nextBtn.disabled = false;
    }
}
