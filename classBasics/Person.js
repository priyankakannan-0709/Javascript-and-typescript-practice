class Person{
    
    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age
    }
    
    get location(){
        return "Chennai";
    }
}
let person = new Person("Priyanka","K",25);
console.log(person.location)
console.log(person.firstName + " "+person.lastName+" "+person.age)