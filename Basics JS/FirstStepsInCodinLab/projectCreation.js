function projectCreation(input){
    let nameArchitect = input[0];
    let numberProject = Number(input[1]);
    let timeForOneProject = 3;

    let neededHours = timeForOneProject * numberProject;

    console.log(`The architect ${nameArchitect} will need ${neededHours} hours to complete ${numberProject} project/s.`);
}
projectCreation(['george', 4])