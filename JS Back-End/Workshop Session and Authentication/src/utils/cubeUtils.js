exports.generateDifficultuLevel = (ourDL) => {
    const difficultyLevels = [
        {dl: 1, label: 'Very Easy', selected: false},
        {dl: 2, label: 'Easy', selected: false},
        {dl: 3, label: 'Medium (Standard 3x3)', selected: false},
        {dl: 4, label: 'Intermediate', selected: false},
        {dl: 5, label: 'Expert', selected: false},
        {dl: 6, label: 'Hardcore', selected: false},
    ]

    const result = difficultyLevels.map( x => {
        if(ourDL == x.dl){
           x.selected = true;
        } 
        return x;
    });
    return result;
}