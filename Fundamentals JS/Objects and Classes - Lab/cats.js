function cats(catArr){
class Cat{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
 
for (let el of catArr) {
    let [name, age] = el.split(' ');
    let currentCat = new Cat(name, age);
    currentCat.meow()
}
}
cats(['Mellow 2', 'Tom 5'])