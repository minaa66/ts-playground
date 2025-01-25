// //first program
// type Person = {
//     name:string
// }
// const person:Person = {
//     name:'john'
// }
// console.log(person.name)



// //Strings
// let myName:string= 'mina isaac'
// // numbers 
// let Fsvnumber: number = 9
// //boolean
// let flag:boolean= true


// //type inference
// let car = 'mersycide'
// let favnumber = 9
// //you can't assign it to different type now
// //favnumber = 'mina'  this errors 



// //any type
// let color:any = 'green'
// color = 20 //no error happens
// //color();  // this will error only if you run code


//function parameters  
//normal function
// function AddOne (half:number , anotherHalf:number){
//     return half+anotherHalf
// }
// console.log(AddOne(3,3));  // prints 6 

// //arrow function
// const double= (x:number) =>{
//     return 2*x
// }
// console.log(double(2))     //prints 4  and you can not path it more then 1 parameter

// function Greet (person:string = 'mina'):boolean{
//     console.log('hello',person)
//     return true
// }
// Greet();  //you can annotate the return value type



//void return value type
// function hiUser (username:string):void{
//     console.log(`hi ${username} welcome to my repo`)
// }
// hiUser("mina")

// //never type  
// //1- a function that always throw an error
// //2- a function that has an infinite loop
// //3- a variable that can never have a value

// function throwError(msg:string):never{
//     throw new Error(msg)
// }
// function infiniteLoop():never{
//     while(true){

//     }
// }

// let x:never;
// x= infiniteLoop();




//Array types
// const numbers:number[] = [1,2,3,4,5]
// const strings:string[]=["one","two","three"]
// strings.push('mina') //you can push only strings

// //multi dimentional array
// const marix: number[][]= [[1,2,3], [2,3,4]]
// console.table(marix)

//objects 
// const person: {firstname:string ; lastnsme:string; age:number }={
//     firstname:"mina",
//     lastnsme:"isaac",
//     age:23
// }
// console.table(person)



// type Aliases
// type Person = {
//     name:string;
//     age:number;
//     email?:string;
//     readonly location:string;
// }
// const person:Person={
//     name:"mina",
//     age:23,
//     location:"Egypt"
// }
// //person.location='mina'  // we can't do this as it is a read only 

// console.table(person)



// intersection types 


// type person = {
//     name:string;
//     age:number;
// }
// type employee = {
//     id:number;
//     role:string;
// } 

// type PersonandEmployee = person&employee;

// const person:PersonandEmployee = {
//     id:1900426,
//     name:"mina",
//     age:17,
//     role:"engineer"
// }

// console.table(person)




// //unions
// let password:number|string;
// password=1234
// password="mina1234"



// //literal types
// let color:"red"|"blue"|"black";
// color="red";
// // color="green" // this errors because it is not in the list



// //tuples  array with fixed number of elements and fixed structure
// let mytuple:[string,number]= ["hello", 12345];
// let [first,second]=mytuple;  // destructioning
// console.log(first)
// console.log(second)

// //Enums 
// enum weatherCondition {
//     Sunny,
//     Cloudy="cloudy"
// }
// console.table(weatherCondition.Cloudy)




//class properties annotations
class Person {
   private  name:string;
   public age:number;
   protected password:string;
    constructor(name:string,age:number,password:string){
        this.name =name;
        this.age = age;
        this.password= password;
    }
    getName():string{
        return `your name is ${this.name} and your age is ${this.age} and your pass is ${this.password}`
    }
}

const person = new Person("john", 17,"mina1234")
console.log(person.getName());
//console.log(person.name) //this error




