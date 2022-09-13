/* 

*/

// undefined casees
// 1- variable not defined
let first;
console.log(first);

//2- function without return
function second(x, y) {
    // console.log()
    const sum = x + y;
}

const result = second(2, 5);
console.log(result);

//3- function with return but without return values
function third(x, y) {
    const sum = x + y;
    return;
} 
const result2 = third(4, 6);
console.log(result2);
// just wrote return but didn't return anything


//4- parameter that isn't passed in the function
function double (a, b){
    const result = a*2;
    console.log(b);
}
double(2);

//5- property doesn't exists in the object
const fifth = {
    name: 'Shagor', age: 20, location: 'Mirpur'
}
console.log(fifth.phone);

//6- array index which doesn't exists in that array 
const sixth = [55, 45, 62, 3];
console.log(sixth[6]);

//7- if array index is deleted and then the deleted index value is undefined 
delete sixth[2];
console.log(sixth);
console.log(sixth[2]); //undefined

// value set as undefined
const examples = undefined;
console.log(examples , 'examples');



// null-- value null set na korle kokhno null hoy na