let form = document.getElementById('form');
form.addEventListener('submit', readInput)

function readInput(e){
    e.preventDefault();
    let newStudentInfo = new FormData(form);

    let firstName = newStudentInfo.get('firstName');
    let lastName = newStudentInfo.get('lastName');
    let facultyNumber = newStudentInfo.get('facultyNumber');
    let grade = newStudentInfo.get('grade');

    postNewStudenInfo({firstName, lastName, facultyNumber, grade});
}

async function postNewStudenInfo(body){
     let response = await fetch('http://localhost:3030/jsonstore/collections/students',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
     })
    
    displayAllStudents()
}

async function displayAllStudents(){
    let response = await fetch('http://localhost:3030/jsonstore/collections/students')
    let studentsData = await response.json()
    let tbody;

    let resultTable = document.getElementById('results');
    if(resultTable.querySelector('tbody')){
        tbody = resultTable.querySelector('tbody');
        tbody.innerHTML = ''
    } else{
        tbody = document.createElement('tbody')
    }

    let studentsArr = Array.from(Object.values(studentsData))
    studentsArr.forEach( student => {
        let tr = document.createElement('tr')

        let firstNameTH = document.createElement('th');
        firstNameTH.textContent = student.firstName;
        tr.appendChild(firstNameTH)

        let lastNameTH = document.createElement('th');
        lastNameTH.textContent = student.lastName;
        tr.appendChild(lastNameTH)
        
        let facultyNumberTH = document.createElement('th');
        facultyNumberTH.textContent = student.facultyNumber;
        tr.appendChild(facultyNumberTH)
        
        let gradeTH = document.createElement('th');
        gradeTH.textContent = student.grade;
        tr.appendChild(gradeTH)

        tbody.appendChild(tr)
    })

    resultTable.appendChild(tbody)
    console.log(studentsData);

}
