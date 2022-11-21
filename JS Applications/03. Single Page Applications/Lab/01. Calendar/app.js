const bodyInfo = document.body;

let tds = document.querySelectorAll('td');
Array.from(tds).map(x => {
    x.addEventListener('click', getNeededInfo)
})

function getNeededInfo(e) {
    let info;
    let section;
    let clickedTD;
    if (e.path[0].nodeName == "DIV") {
        clickedTD = e.target.parentNode;
        info = e.target.textContent;
        section = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    } else if (e.path[0].nodeName == "TD") {
        clickedTD = e.target;
        info = e.target.querySelector('div').textContent;
        section = e.target.parentNode.parentNode.parentNode.parentNode;
    }

    let sectionClassName = section.className;

    if (sectionClassName == "yearsCalendar") {
        displayMonthCalendar(info)
    } else if (sectionClassName == "monthCalendar") {
        let month = clickedTD.querySelector('div').textContent
        displayDaysCalendar(section, month)
    }
}

displayYearsCalendar()
function displayYearsCalendar() {
    let yearsCalendar = document.getElementById('years');

    hideSections()
    displaySection(yearsCalendar)
}

function hideSections() {
    let sections = document.querySelectorAll('section');
    Array.from(sections).map(x => x.style.display = 'none')
}

function displaySection(sectionInput) {
    sectionInput.style.display = 'block';
}


function displayMonthCalendar(year) {
    let monthsCalendar = bodyInfo.querySelector(`#year-${year}`);
    let caption = monthsCalendar.querySelector('caption');
    caption.addEventListener('click', displayYearsCalendar)

    hideSections()
    displaySection(monthsCalendar);
}

function displayDaysCalendar(section, month) {
    let year = section.querySelector('caption').textContent;
    let monthNum;
    switch (month) {
        case 'Jan':
            monthNum = 1;
            break;
        case 'Feb':
            monthNum = 2;
            break;

        case 'Mar':
            monthNum = 3;
            break;
        case 'Apr':
            monthNum = 4;
            break;
        case 'May':
            monthNum = 5;
            break;
        case 'Jun':
            monthNum = 6;
            break;
        case 'Jul':
            monthNum = 7;
            break;
        case 'Aug':
            monthNum = 8;
            break;
        case 'Sept':
            monthNum = 9;
            break;
        case 'Oct':
            monthNum = 10;
            break;
        case 'Nov':
            monthNum = 11;
            break;
        case 'Dec':
            monthNum = 12;
            break;
        default:
            break;
    }

    let daysCalendar = document.getElementById(`month-${year}-${monthNum}`)
    hideSections()
    displaySection(daysCalendar)
    let caption = daysCalendar.querySelector('caption')
    caption.addEventListener('click', e => {
        e.preventDefault();
        displayMonthCalendar(year)})
}
// debugger;
