let bodyInfo;

 export function displayYearsCalendar(bodyInfo){
    let yearsCalendar = document.getElementById('years');
    putEventLis(yearsCalendar, bodyInfo)

    document.body.replaceChildren(yearsCalendar);
}

function putEventLis(node, givenBodyInfo) {
    bodyInfo = givenBodyInfo;
    let options = node.querySelectorAll('tr.days td');
    Array.from(options).map(x => {
        x.addEventListener('click', getNeededInfo)
    })
}

function getNeededInfo(e) {
    let info;
    if (e.path[0].nodeName == "DIV") {
        info = e.target.textContent;
    } else if (e.path[0].nodeName == "TD") {
        info = e.target.querySelector('div').textContent;
    }
    displayMonthCalendar(info)
}

function displayMonthCalendar(year){
    let monthsCalendar = bodyInfo.querySelector(`#year-${year}`) ;
    console.log(monthsCalendar);
}
// debugger;
