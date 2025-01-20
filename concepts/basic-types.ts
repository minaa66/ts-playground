//first program
type Person = {
    name:string
}
const person:Person = {
    name:'john'
}
console.log(person.name)


//Strings
let myName:string= 'mina isaac'
// numbers 
let Fsvnumber: number = 9
//boolean
let flag:boolean= true


//type inference
let car = 'mersycide'
let favnumber = 9
//you can't assign it to different type now
//favnumber = 'mina'  this errors 



//any type
let color:any = 'green'
color = 20 //no error happens
//color();  // this will error only if you run code