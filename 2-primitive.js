/* 
data types-----
there is two types of data in js----

#primitive-----single valued variable

1. number
2. string
3. boolean
4. undefined
5. null
6. symbol

#Non-primitive
7. object

*/

const x = { job: 'web developer' }
const y = x;
console.log(x, y);
x.job = 'back end developer.';
console.log(x, y);