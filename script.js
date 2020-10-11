// QUESTION 1

var petArray = ["cat", "cow", "dog" ];


// QUESTION 2

console.log(petArray[1]);


//QUESTION 3

petArray.push("sheep");


//QUESTION 4

console.log(petArray.length);


//QUESTION 5

var catObject = {
    name: "Tom",
    color: "grey",
    age: 2,
};


//QUESTION 6

console.log(catObject.age);


//QUESTION 7

var catArray = [
    {
        name: "Tom",
        color: "grey",
        age: "2",
    }
];


//QUESTION 8

for(var i = 0; i < catArray.length; i++){
    console.log(catArray[i].name);
    console.log(catArray[i].color);
    console.log(catArray[i].age);
}


//QUESTION 9

function logToConsole(animal) {
    console.log(animal);
}


//QUESTION 10

logToConsole("donkey");

