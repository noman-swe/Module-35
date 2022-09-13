const favNum = 27;
function add(first, second) {
const result = first + second;
const result2 = result + favNum;
// console.log(result);
return result2;
}

const sum = add(11, 35);
console.log(sum);


// function er vitor e variable declaretion er somoy let or const use na korle sei variable ta global variable hoye ja..jeta k global licking bole.... which is not good for use.  
// let and const block scope, let and const hoist hobe na but var hoist hoye jay......  --- local scope
