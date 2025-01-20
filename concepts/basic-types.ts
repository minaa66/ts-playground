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
function AddOne (half:number , anotherHalf:number){
    return half+anotherHalf
}
console.log(AddOne(3,3));  // prints 6 

//arrow function
const double= (x:number) =>{
    return 2*x
}
console.log(double(2))     //prints 4  and you can not path it more then 1 parameter

function Greet (person:string = 'mina'):boolean{
    console.log('hello',person)
    return true
}
Greet();  //you can annotate the return value type

