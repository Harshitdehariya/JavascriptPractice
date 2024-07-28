   
    // this is hoisting concept in javascript

    


// Hello();
    
//  function Hello(){
//     console.log("Hello");
//  }


// console.log(x);
// var x = 5;
// console.log(x);

//  hello()
// function hello(){
//   console.log("hello")
// }

//hello()
// function hello(){
//   console.log("hello");
// }

// Variables in javascript

// Variable helps us to store the value
//  console.log(x);

//  var x = 5;

//  console.log(x);

// example2

// console.log(y);

// let y =10;

// console.log(y);

// example 3
// {identifier name has is already been declared through error when we use let and const but thius is different in var case}

// let name = Harshit;
// let name = dehariya;
// console.log(name);

// var name = "arpit";
// var name = "dehariya";
// console.log(name);

// const name = "Harshit";
// const name = "dehariya";
// console.log(name);


// example 4
// var name = "Harshit";
// var name = "dehariya";
// console.log(name);

// Data types in javascript
//data types detemine the types of the value which can be stored by variable
//  primitive data types
//  Number
//   let num=10;
//   console.log(typeof num);

// ?Number
// let num = 10;
// console.log(typeof num);

// let String = "harshit";
// console.log(typeof String);

// let Boolean = true;
// console.log(typeof Boolean)

// let a = 10;
// console.log(b);

// let a = null;
// console.log(typeof null);

//  String

//  let str="harshit";
//  console.log(typeof str);

//  Boolean
 
// let bool = true;
// console.log(typeof bool);

//  Null
//  let a = null;
//  console.log(typeof null)

//  undefined

// let x = 10;
// console.log(b)


// Non primitive datatypes
// Object
// function
// array


//Type conversion in javascript


//Explicit type conversion in programming is done manually by the programmer, while implicit conversion is handled automatically by the compiler. 
  //implicite conversion

//  result = '3' +7855864;
// console.log(result);
//  console.log(typeof result);

// result = "57" - true;
// console.log(result);
// console.log(typeof result);

// var result = '3'-null;
// console.log(result);  
// console.log(typeof result);
    
// result = '4' - undefined ;
// console.log(result);
// console.log(typeof result)


// result = true;
// result = Boolean(result);
// console.log(typeof result);
// console.log(result);

//explicit conversion
// result = true
// result = Boolean(result)
// console.log(result);
// console.log(typeof result);

// result = true;
// result = Boolean(result);
// console.log(result);
// console.log(typeof result);

// result = "harshit"
// result = String(result);
// console.log(result);
// console.log(typeof result);

//Operator

// Arithmatic operator

// adition
// console.log(5+3);

//substitution
// console.log(67-88);

// multipication

// console.log(5*5);
   
//divide
// console.log(6/9);

// console.log(5%5);
// console.log(10 ** 7);



//increment/decrememnt opertaor
//prefix opertaor
// let a = 1
// console.log(--a);
 
 //postfix
// let b =10;
// console.log(b++)

//comparison opertator
//  a =9;
//  b= 10;
//  console.log(a==b)
//  console.log(a!=b)
//  console.log(a>b)
//  console.log(a<b)
//  console.log(a>=b);
//  console.log(a<=b);

//  a ="10";
//  b= 10;
//  console.log(a==b)
//  console.log(a!=b)


//  a =true;
//  b= 1;
//  console.log(a==b)

//  example 2 of type conversion
//process of converting data fronm another type
a = true;
b= 1;
console.log(a===b);


//logical operator

//OR

// false false
// a = 6;
// b = 6;
// console.log(a>b || a<b);
  
// if one condition is true so it will be printed true in OR operator
// a = 6;
// b= 8;
//  console.log(a>b || a<b);
  
//And operator
// if condition is true true then only print true else print false
// a =10;
// b=12;
// console.log(a>b && a<b);

// a=10;
// b=10;
// console.log(a>=b && a<=b);


// console.log(!false);

//Conditional statement in javascript


// let age = 20;
// let name = "Harshit"
// if(age>=18){
  
// console.log("you are eligible");
// }
// else{
//   console.log(" you are not eligible")
// }


//elseif

// let a = 20;
// let b = 21;

// if(a>b){
//  console.log("a is greater than b");
// }
// else if (a<b){
// console.log("b is greater than a")
// }
// else{
//   console.log("Both are equal")
// }

//Switch  

// let ch = 1;

// switch (ch) {
//   case 1:
//    console.log("i am 1")
    
//     break;
//     case 2:
//     console.log("i am 2")
      
//       break;
//       case 3:
//       console.log("i am 3")
        
//         break;

//   default:
//     console.log("you have pressed wrong case")
//     break;
// }

//loop

// for (var i = 1; i<=10; i++){
//   console.log(i);
// }


// for(var i = 0;i<=10; i++){
//   console.log(i);
// }
//loop

// for(var i = 0; i<=20;i++){
//   console.log(i);
// }


// for(var i = 0;i<=10;i++){
//   console.log(`2 * ${i} = ${2*i}`)
// };


// for(var i = 0;i<=10;i++){
  
//   console.log(`2*i ${i} = ${2*i}`);
// }


// for(var i =0;i<+20;i++){
//   console.log(i)
// }

//while
// var i = 1;
// while (i<=10) {
//   console.log(`2*i ${i} = ${2*i}`);
//   i++;
// } 

// var i = 1;
// while(i<=10)  {
// console.log(`2*i ${i} = ${2*i}`);
// i++;
// }

// for (var i = 1; i<=10;i++){
//   console.log(i);
// }

//DO

// var i = 1;
// do{
// console.log(`2*i ${i} = ${2*i}`);
// i++

// }while (i<=10);

// var i = 1;
// while( i<=10) {
//   console.log(`2*i ${i} = ${2*i}`);
//   i++;

// }
// var i = 1;
// do{
//   console.log(`2*i ${i} = ${2*i}`);
//   i++;
// } while( i<=10)

//  let b = (a,b) =>  console.log(a+b);
//  b(55,7);

//Array

// let name = ["Harshit","Anchal","brekup"];

// console.log(name

// );

// const name = ["harsh", "dehariya","babul"];
// console.log(name.length);

// let name = ["Harshit" , "arpit" , "dehariya" ]

//  name = name.splice(1,3,"cena");

//  console.log(name);


// let name = ["harshit","arpit", "dehariya"]
// console.log(name.length)
// console.log(name);

//function in javacript

 
// function Hello (){

//   console.log(Hello);
// }
// Hello();


//  let b = (a,b) =>  console.log(a+b);
//  b(55,7);

// let a = () => console.log(a-b);
// b(45,9)

// let b = (a,b) => console.log(a-b);
// b(23,55)
   


// var a = (name) => {
//   console.log("harshit");
// }
// a();

// let a =  (name) => {
//   console.log("name");
// }
// a();

// Array
//  let name = ["harshit","dehariya",1,true,null]
//  name.push("anchal");
//  console.log(name);

  //unshift put the value on the first of array....
// let name = ["harshit",1,null,true]
// name.unshift("anchal");
// console.log(name);

// let name = ["harshit",1,null,true]
// name.splice( 1,0, "dehariya");
// console.log(name);


//  let name = ["harshit","dehariya"]
//  console.log(name[1]);


// let num = [20,30,40,50,60];
// console.log(num.sort());

// let num = [20,30,50,60,77]
// console.log(num.reverse());


// let num = [20,30,50,60,77]
// console.log(num.splice(1,3));

// let num = [10,20,30,50,60,77]
//  let a = num.filter((value, ind,arr) =>{
//   if (value>=10 && value<=50){
//     return value
//    }
  
//  })
//  console.log(a);
 

// let num = [5,10,15,20,30,55,99]
// let a = num.filter((val,index,arr)=>{
//   if(val>=5 && val<=55){
//     return val
//   }
// })
// console.log(a);


// let num = [20,10,40,30,50,60]
// let a = num.filter((val,index,arr) =>{
//  if(val>=10 && val<=40){
//   return val
//  }
// })
// console.log(a);


//multi dimension array

// let arr = [
//   ["harshit",25],            
//   ["arpit",20],
//   ["shanky",18],

// ]
// arr.forEach(data =>{
//  data.forEach(val=>{
//   console.log(val);
//  })

// })

// let arr = [
//   ["harshit",25],            
//   ["arpit",20],
//   ["shanky",18],
// ]

// console.log(arr);

// let arr = [
//   ["harshit",25],            
//   ["arpit",20],
//   ["shanky",18],
// ]

// console.log(arr[2][0]);


// let arr = [
//   ["harshit",25],            
//   ["arpit",20],
//   ["shanky",18],
// ]

// arr.forEach(data=>{
//   data.forEach(val=>{
//     console.log(val);
//   })
// })


//copy and spread

// let arr1 = ["harshit",303,true]
// let arr2 = arr1.slice(0).concat(["item"])

//  arr2.push("berg");

// console.log(arr1)
// console.log(arr2)

//spread
// let arr1 = ["harshit", 234 , true]
// arr2 = [...arr1]

// arr1.push("berg");

// console.log(arr1);
// console.log(arr2);


//spread operator
// let arr1 = ["harshit",32,true]

// let arr2 = [...arr1]
 
// arr1.push("berg");
// console.log(arr1);
// console.log(arr2);

//Array destructuring
//this is not good way
// let arr1= ["thomas","jane"]
// item1 = arr1[0];
// item2 = arr1[1];

// console.log(item1);
// console.log(item2);

// this is good way

// let arr1 = ["harshit","arpit","neo","dehariiya"];
// let [item1, item2,...item3] = arr1;

// console.log(item1);
// console.log(item2);
// console.log(item3);


// 

// object is a container that contains properties of key value pair

// let obj = {
//  name : "harshit",
//  age : 25,
//  "last name" : "dehariya",

//  fun : function()

// {
//   console.log("i am function");
// },

// arr : [10,30,40,50,60],

// }

// console.log(obj["last name"]);
// let a = "harshit"
// obj.fun();
// obj.key = "item1"
// obj[a] = "item2"
// console.log(obj);



// console.log(obj);

// // if we have to put some key inside obj
//  let a = "harshit"
// obj.key = "item1"
// obj[a] = "dehariya"
// for(let i in obj){
//   console.log(obj[i]);
// }

// for(let i in obj){
//   console.log(i);
// }


//object inside array

// let arr = [
//   {user:1,name:"harshit"},
//   {user:2,name:"dehariya"},
//   {user:2,name:"sonam"}

// ]
// console.log(arr[0]);

// let arr = [
//   {user:1,name:"harshit"},
//   {user:2,name:"dehariya"},
//   {user:2,name:"sonam"}

// ]

// let a = [item1,item2,item3] = arr;
// console.log(item1);
// console.log(item2);
// console.log(item3);

// let arr = [
//   {user:1,name:"harshit"},
//   {user:2,name:"dehariya"},
//   {user:2,name:"sonam"}

// ]

//forin loop
// for(let i in arr){
//   console.log(i);
// }

//for of
// for(let i of arr){
//   console.log(i);
// }


//function inside function

//  let fun = function(){
//   console.log("i am a function `1");

//   let fun2 = function(){
//     console.log("i am a function 2");
//   }
//   fun2();
//  }
//  fun();


//Lexical scope
  // var a = 10;
// let fun = function(){
//   // var a = 10;
//   console.log("this is function 1"+ a);
//  //inside function we cant acees the a variable bcoz of lexical scope thats why its through error
// let fun2 = function(){
//   let  a = 20;
//   console.log("this is functiion 2"+a);
// }
// fun2();

// }
// fun();



// debugger
//debugger helps us to find the error in our code and helps us to debug the code and also find where our code is brekpoint


//  function fun(){
  
//   for(var i= 1 ; i<=5; i++){
//     console.log(i);
//   }
//  }
//  fun();


//sets
//sets has prefered uniqueness it does not contain same value at a time is we have write 30 in sets we cant add 30 again...

// let arr = [20,30,40,50,60,70,70];
// console.log(arr);

// const s=new Set([20,30,40,50,60,70,80,80]);
// s.add(90);
// s.add("harshit");
// console.log(s);


// length = 1;
// for(let element of s) {
  
//   length++}
//   console.log(length);



// let arr = [20,30,40,50,60];
// console.log(arr);
// console.log(arr.length);


// const s = new Set([20,30,40,50,60,70]);
// s.add(100);
// s.add("harshit")
// console.log(s);
// length = 1;
//  for (const element of s) {
//   length++;
//  }
//  console.log(length);


//Maps

// var map1 = new Map([[1,"one"],
// ["harshit","dehariya"],
//   ["whole number", [1,3,4,6,7,8,9] ]
// ]
// )
// console.log(map1.get("whole number"))


// console.log(map1);


// var map2 = new Map();
// map2.set(["harshit","mehra"])
// console.log(map2);
  
// var map1 = new Map([[1,"harshit"],
// ["arpit","dehariya"],
// ["whole number",[1,3,4,5,6,7]]

// ])
// console.log(map1);
// console.log(map1.get("arpit"))

// var map2 = new Map()
// map2.set(["harshit","dehariya"])
// console.log(map2);


// var map1 = new Map([[1,"anchal"],
// ["harshit","deariya"],
// ["whole numbehr", [1,3,4,5,6,7,9]]


// ])

// console.log(map1);
// console.log(map1.get(1));

// var map2 = new Map()
// map2.set(["harsh","i love you bro"])
// console.log(map2);

// var map3 = new Map([[1,"anchal"],
// ["harshit","deariya"],
// ["whole numbehr", [1,3,4,5,6,7,9]]

 
// ])
// var map3 = new Map()
// map3.set(["bro","sister"])
// console.log(map3.get["harshit"]);

//this 


//this keyword behaves differently in javascript becoz of strict mode and non strict mode 

// let obj = {

// fname : "harsh",
// lname : "dehariya",
// age : 25,
//  fun : function(){

//   console.log(this.fname);
//  }

// }
// obj.fun()

//new

// constructor function technically as regular function buts only two cases are there
//1) first letter should be capital in constructor
//2) its always executed only with new operator


//symbol

//symbol represent a unique identification and its is hidden also


//Recursion
//recursion means function calling itself many times like loop but recursion use in data structure


//asynchronous

// console.log("this");

// setTimeout(()=>{
// console.log("dehariuya");
// },5000)


// console.log("matter");

// setTimeout(()=>{

// })


//calback function

//Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.

// function fun2(val){

//   console.log(val);
// }

// function add(a,b,callback){
//  let sum = a+b
//  callback()
// }

// add(12,66,fun2)


//setinterval
//setInterval() is a function in JavaScript that is used to repeatedly execute a given function at a specified interval

//  let inter = setInterval(fun,1000)

// function fun(){
//   let date = new Date().toLocaleTimeString();
//   console.log(date);

// }
//  setTimeout(()=>{
//   clearInterval(inter)
//  },10000);


//call apply  bind

// function fun(age,gender){
//   console.log(this.name,age,gender);
// }

// var obj1 =
//  {
//  name:"harshit"

// }

// var obj2 =
// {
// name: "dehariya"
// }

// fun.call(obj1,12,"male")



//apply

// function fun(age,gender){
//   console.log(this.name,age,gender);
// }
// var obj1 = {
//   name:"Arpit"
// }
// var obj1 = {
//   name:"dehariya"
// }

// fun.apply(obj1,[12,"female"])

//bind

// function fun (age,gender){
 


//   console.log(this.name,age,gender);
// }

// var obj1 = {
 
// name:"harshit"
// }

// var obj2 = {
// name:"dehariyaji"
// }

//  var fun = fun.bind(obj1,33,"female")
//  console.log(fun);


//proto

// var obj = {
//   fname : "harshit"
// };

// var obj2 = {
//   lname : "mehra"
// };

// obj2.__proto__= obj

// console.log(obj2);



//prototype
//The prototype gives access to the prototype of function using function. proto gives access to the prototype of the function using the object.

// class User{
//   constructor(name){
//     this.name = name;
//   };
 
//   sayHii(){
//   console.log(this.name);

//   }

// };

// let user = new User ("Harshit");
// user.sayHii();

// let user1 = new User ("arpit");
// user1.sayHii();




// class Fresher {
// constructor(age){
// this.age = age;
// }

// sherHii(){
//   console.log(this.age);
// }

// };

// let fresher = new Fresher(66)
// fresher.sherHii();

// console.log(typeof Fresher);




// class Atom {
// constructor(molecule){
//  this.molecule = molecule;

// }
//  atomHey(){
//   console.log(this.molecule);
//  }


// }

// let atom = new Atom ("nitrozen");
// // atom.atomHey();

// console.log(atom);
// console.log(typeof Atom);

//  class User{
//   constructor(name){
//    this.name = name;

//   } 
//   sayHey(){
//     console.log(this.name);
//   }


//  }

//  let user = new User("arpit");
//   // user.sayHey();
// console.log(typeof User);


//inheritance
//In programming, inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one. JavaScript implements inheritance by using objects. Each object has an internal link to another object called its prototype


// class Animal{
// constructor(name){
//  this.name = name;
// }
//  speakJi(){
//   console.log(`${this.name} please make a noise`);
//  }

// }

// class dog extends Animal {
//   constructor(name){
//     super(name);
//   }
// }

// class cat extends Animal {
//   constructor(name){
//     super(name);
//   }
// }



// let d = new Animal ("tuntun")
// d.speakJi();
  

//super
//The 'super' keyword allows referencing the parent class or superclass of a subclass in Java. 


// class Animal{
  // constructor(name){
  //  this.name = name;
  // }
  //  static speakJi(){
  //   console.log(`${this.name} please make a noise`);
  //  }
  
  // }
    
  // class cat extends Animal {
  //   constructor(name){
  //     super(name);
  //   }
  // }
  
  
  
  // let d = new Animal ("tuntun")
  // Animal.speakJi();



  //try catch throw
    

// function d(a,b) {
// try{
//   if(b==0){
//     console.log("u cant divide b");
//   }
//   else{
//     console.log(a/b);
//   }
// }
// catch(err){
//   console.error(err);
// }
// }
   

// d(10,0);



// function h(a,b){
// try{
//   if(b==0){
//     console.log("you cant divide b to 0");
//   }
//   else{
//     console.log(a/b);
//   }
// }catch(err){
//   console.log(err);
// }



// }

// h(10,0);

//fetch api


// fetch('https://jsonplaceholder.typicode.com/posts')

//   .then(response =>{

//     if(!response.ok){
//      throw new Error("network not responding")
//     }

//     return response.json();

//   }).then(data => data.forEach(element => {
//     console.log(element.title);
//   }))
//   .catch(error => console.error(error));

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//   method: 'PUT',
//   body: JSON.stringify({
//     id: 1,
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
  


// async function postJSON(data) {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: "POST", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// const data = { username: "example" };
// postJSON(data);



// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response =>{
// if(!response.ok){
//   throw new console.error("fetch failed")
// }
// return response.json();


// }).then(data => data.forEach(element => {
//   console.log(element.title);
// })).catch (error => console.error("failed"))


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then (response => {
 
//   if(!response.ok){
//     throw new error("fetch not fulfilled");
//   }
//   return response.json();

// }).then(data => data.forEach(element => {
  
//   console.log(element.);
// })).catch(error=> console.log("fetch failed sorry"));



// fetch('https://jsonplaceholder.typicode.com/posts')
// .then (response=> {
// if(!response.ok){
//   throw new error("not fetch soory please try later");
// }

//  return response.json();

// }).then(data => data.forEach(element => {
//   console.log(element.userId);
// })).catch(error=> console.error(error));



// function fun(){
//   return new Promise((resolve,reject)=>
//   {
//   setTimeout(()=>{
//     console.log("data");
//   })
//   reject("reject succesfull");
//   })
  
// }
// fun();



// fetch('https://jsonplaceholder.typicode.com/posts')
// .then (response => {
 
//   if(!response.ok){
//     throw new error("fetch not fulfilled");
//   }
//   return response.json();

// }).then(data => data.forEach(element => {
  
//   console.log(element);
// })).catch(error=> console.log("fetch failed sorry"));




// fetch('https://jsonplaceholder.typicode.com/posts')

// .then(response=>{

//   if(!response.ok){
//     throw new error("fetch failed sorry")
//   }
 
//   return response.json();

// }).then (data => data.forEach(element => {

//    console.log(element);

// })).catch(error=> console.log("fetch failed sorry"));




// fetch('')
//  .then (Response=>{

//   if(!Response.ok){
//     throw new Error ("fetch failed")
//   }
  
//   return Response.json();

//  }).then (data => data.forEach(element => {

//       console.log(element)
//  })).catch (error => console.log("fetch failed soory ji"));

// Dom

//document object model
//dom is a programming interface that allows us to create
// remove or add elemnets in our document we can also add events thats helps us our web page interactive
 

//selectors in dom


//onClck




// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(Response=>{

//   if(!Response.ok){

//     throw new console.error("fetch failed");
//   }

//   return  Response.json();



// })

// .then (data => data.forEach(element => {

   
//    console.log(element.title);

// })).catch (error => console.log("fetch failed soory ji"));


// fetch('https://jsonplaceholder.typicode.com/posts')

//   .then(response =>{

//     if(!response.ok){
//      throw new Error("network not responding")
//     }

//     return response.json();

//   }).then(data => data.forEach(element => {
//     console.log(element.title);
//   }))
//   .catch(error => console.error(error));
  


// axios.get('')
// .then (response =>{
//  if(!response.ok){
//   throw new Error("fetch failed")
//  }
//  return response.json();
// })
// .catch(console.error(console.error()))



// fetch('https://jsonplaceholder.typicode.com/posts')
// .then (response =>{
// if(!response.ok){
//   throw new console.error("fetch failed");
// }
// return response.json()


// }).then (data => data.forEach(element =>{
//   console.log(element.title);
// }))
// .catch(console.error(error))




// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response =>{
//   if(!response.ok){
//     throw new console.error("fetch failed");
//   }
//   return response.json()
// }).then(data => data.forEach(element =>{
//   console.log(element.id);
// }))
// .catch (error => console.log("fetch failed soory ji"));



// fetch('')
// .then(response =>{
//   if(!response.ok){
//    throw new console.error('fetch failed')

//   }
//   return response.json()
// }).then (data  => data.forEach(element =>{
//   console.log(element.id);
// }))
// .catch(error => console.log("fetch failed sooryyyy love"))



//import axios from axios

// axios.get('')
// .then(response =>{
//   if(!response.ok){
//     throw new console.error("fetch failed")
//   }
//   return response.json()
// }).then (data => data.forEach(element =>{
// console.log(element.id);
// }))




// axios.get('')
// .then (response =>{

// if(!response.ok){
//   throw new Error ("fetch failed")
// }
// return response.json()
// }).then (data => data.forEach(element => {
//   console.log(element.title);
// }))


