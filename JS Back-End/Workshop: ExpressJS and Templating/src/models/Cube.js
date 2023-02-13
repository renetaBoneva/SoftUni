const db = require('../db.json');
const fs = require('fs');
const path = require('path');

class Cube {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.difficultyLevel = difficultyLevel;
    }

    save() {
        const id = Number(db.cubes[db.cubes.length - 1].id) + 5;
        db.cubes.push({ id,name: this.name, description: this.description, imageUrl: this.imageUrl, difficultyLevel: this.difficultyLevel });
        const jsonData = JSON.stringify(db, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData)
    }
}

module.exports = Cube;
