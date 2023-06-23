interface Child {
    name: string,
    grade: number
}

const childrenInTheBus: Child[] = [
    { name: 'Alex', grade: 2 },
    { name: 'Jim', grade: 3 },
    { name: 'Barb', grade: 1 },
    { name: 'Peter', grade: 2 },
    { name: 'Anna', grade: 1 },
    { name: 'Zoe', grade: 2 },
    { name: 'Charlie', grade: 1 }
];

const sortedList: Child[] = childrenInTheBus.sort((a, b) => a.grade - b.grade)
sortedList.forEach((child) => console.log(`Name: ${child.name} - Grade: ${child.grade}`))

