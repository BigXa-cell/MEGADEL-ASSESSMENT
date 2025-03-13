### **2️⃣ Short Answer Questions (2 Questions)**  
8. **What are the key differences between `var`, `let`, and `const` in JavaScript?**


Write your answer here.
Be as detailed as possible.
You can provide a code snippet using markdown format.



var is functionn scoped this means its accesible within the function its declared or global if declared outside any function also with var it allowsre- declaration this means  that you can declare a variable that its already declared within the same scope with no errors.
 e.g
 var x = 25;
 console.log(x);//25

///re-declaration allowed
var x = 30;
console.log(x);//30

let is blocked scope this means its only accessible within the block where its declared including if statements,for loops e.t.c. also reassignment is allowed and redeclaration is not allowed within the same scope.
e.g
let x = 25;
console.log(x);//25
//re-declaration not allowed
let x = 30;
console.log(x);//ReferenceError: x is not defined
//re-assignment allowed
x = 30;
console.log(x);//30


const is also blocked scope this means its only accessible within the block where its declared including if statements,for loops e.t.c. also reassignment is not allowed and re-declaration is not allowed within the same scope.
eg
const x = 40;
console.log(z); // 40
z = 40; // TypeError: Assignment to constant variable.

const person = { name: "Leon" };
person.name = "Ndeti"; // This is allowed because the object is mutable
console.log(person.name); // "Ndeti"
