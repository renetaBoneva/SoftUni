function meetings(data) {

    let schedule = new Map;
    for (let request of data) {
        let [day, name] = request.split(' ');
        if (schedule.has(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule.set(day, name);
            console.log(`Scheduled for ${day}`);
        }        
    }
   
    for(let line of schedule){
       console.log(`${line[0]} -> ${line[1]}`);
    }
}
meetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)