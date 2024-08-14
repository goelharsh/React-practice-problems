//Here we are using keyworkd (constructor function concept);
// function abc(){
//     console.log("hi")
// }

// const value = new abc();
// console.log(value);


// here we don't need to use new keyword (due to factory function concept)
function abc(name){
    const obj = {name}
    return obj;
}

const value =  abc("goel");
console.log(value);