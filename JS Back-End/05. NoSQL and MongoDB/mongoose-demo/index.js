const mongoose = require('mongoose');
const Cat = require('./models/Cat')

async function main() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://127.0.0.1:27017/catShelter')

    console.log('Database Connected');


    const cats = await readCats();
    cats.forEach(cat => {
        console.log(cat.printName());
        console.log(cat.info);
    });
    // await saveCat('Maca', 3, 'Prevuzhoden')

}
main()

async function readCats() {
    const cats = await Cat.find();
    return cats;
}

//Get info by find, findOne, FindById methods 
async function readCat() {
    const catFind = await Cat.find({ name: 'Nav' })
    const catFindOne = await Cat.findOne({ name: 'Nav' })

    console.log(catFind);
    console.log(catFindOne);
}

//Update info by updateMany, updateOne, updateById methods 
async function updateCat(name, newName) {
    await Cat.updateOne({ name }, { name: newName })
}

async function saveCat(name, age, breed) {
    await Cat.create({
        name,
        age,
        breed
    });

    // const newCat = new Cat({
    //     name,
    //     age,
    //     breed
    // })

    // await newCat.save();
}

//Find cat whitch age is greather than 3 and less than 13
await Cat.find({})
    .where('age')
    .gt(3)
    .lt(13)
    .sort({age: -1});
await Cat.find({
    age: {
        $gt: 3,
        $lt: 13
    }
})