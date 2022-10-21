const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/fruitsDBM")


const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Fruits Name!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    price: Number
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const apple = new Fruit({
    name: "Apple12",
    rating: 9,
    price: 100
})

const orange = new Fruit({
    name: "orange",
    rating: 5,
    price: 50
})

const mango = new Fruit({
    name: "mango",
    rating: 8,
    price: 300
})

Fruit.insertMany([apple,orange,mango],function (err) {
    if (err)
        console.log(err)
    else
        console.log("Successfully saved all the fruit to FruitsDB");
})

Fruit.find(function (err, fruits) {
    if (err)
        console.log(err)
    else {
        fruits.forEach(function (fruit) {
            console.log(fruit.name)
           
        })
    }
})

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const Person = mongoose.model("Person", personSchema)

const person = new Person({
    name: "ANIKET",
    age: 21
})

person.save()


Person.deleteMany({ name: "ANIKET" }, function (err) {
    if (err)
        console.log(err)
    else
        console.log("Successfully Deleted all ");
})

//2504715750