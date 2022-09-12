/* 
---------------
    Falsy::
---------------
false
0
empty string
undefined
null
NaN

--------------
   Truthy::
--------------
true
any number (Positive or negative without Zero)
any string and including single white space, '0', 'false'.
array - []
{}
anything else that is not falsy will be truthy

*/

let x= {};
console.log(x);
if(x) {
    console.log('variable is truthy');
}
else{
    console.log('variable is falsy');
}