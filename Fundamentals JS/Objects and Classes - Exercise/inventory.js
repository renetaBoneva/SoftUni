function inventory(data) {

    let result = []

    for (let line of data) {
        let currentHero = {};
        line = line.split(' / ');
        let name = line.shift();
        let level = line.shift();
        currentHero = { 'name': name, 'level': level, 'items': line.join() }
        result.push(currentHero)
    }

    result.sort((a, b) => {
        return a.level - b.level;
    })

    for (let line of result) {
        console.log(`Hero: ${line.name}`);
        console.log(`level => ${line.level}`);
        console.log(`items => ${line.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)