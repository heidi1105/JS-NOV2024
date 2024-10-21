// ------------- scope ------------
const beatles = ['Paul', 'George', 'John', 'Ringo']

for(let i = 0; i < beatles.length; i++){
    console.log(beatles[i])
}

console.log(beatles)

// ------------- const & let ------------
// let - can be reassigned
// const - cannot be reassigned
for(let i=0 ; i<3 ;i++){
    console.log(i);
}

// collection of data (array / object) -- memory location
const skills = ["breaking the code", "fixing the bugs", "bootstrap"];
skills.push("tailwind");

skills[0] = "sleeping while standing"
console.log(skills)


// ------------- destructuring ------------
// Object -- collection of data with key-value pair
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};

// const firstName = person.firstName;
// const lastName = person["lastName"];
// const secret = person.password;

const {firstName, lastName, email, password : secret, username, createdAt, age} = person;
/* BEHIND THE SCENE
    1. Create the variables - firstName, lastName, email, age, secret
    2. Search for the person.firstName, person.lastName, person.email , person.age is undefined, person.password for secret
    3. assign the value to the variable created
*/

console.log(lastName);
console.log(firstName);
console.log(age);
console.log(secret);


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [ , , , , lastAnimal] = animals;
console.log(lastAnimal)


// ------------- spread/rest ------------
// const personCopy = person; // create a shallow copy of person (memory location)
const personCopy = { ...person}; // create a deep copy
personCopy.firstName = "Pepper";

/* BEHIND THE SCENE
    1. Create an object personCopy
    2. grab all the key-value from person, put it in personCopy  
*/

const personCopy2 = { 
    ...person, // grab all key-value pair from person
    age: 16, 
    firstName: "Pepper", // overwrite the key firstName
};

console.log(person);
console.log(personCopy2);

const animals2 = ["dragon", ...animals, "unicorn"]; // push without .push
console.log(animals)
console.log(animals2)


// ------------- arrow function ------------
function sayHello(name){
    console.log(`Hello, ${name}!`);  
}

const sayHello2 = function(name){
    console.log(`Hello, ${name}!`);  
}

const sayHello3 = (name) => {
    console.log(`Hello, ${name}!`);  
}
// if there are more than 1 parameter, () is required
// if there is only 1 parameter, () is optional
const sayHello4 = name => console.log(`Hello, ${name}!`); 

const greetAnonymous = () => console.log("Hi");

sayHello4("Pepper");
sayHello4("Heidi");

// a function that return something
function changePrice(price, discount){
    return price * discount;
}

// longhanded arrow function - whenever {}, need "return"
const changePrice2 = (price, discount) =>{
    return price * discount;
}

// short handed arrow function - implicit return (without return keyword)
const changePrice3 = (price, discount) => (
    price * discount 
)

const changePrice4 = (price, discount) => price * discount; 


const newPrice = changePrice4(100, 0.9);
console.log(newPrice);

// ------------- ternary operator ------------
const canAfford = (itemPrice, accountBalance) =>{
    if(itemPrice > accountBalance) {
        return "Cannot afford!"
    }else {
        return "Can afford!";
    }
}

const canAfford2 = (itemPrice, accountBalance) =>{
    return itemPrice > accountBalance?
        "Cannot afford!":
        "Can afford";
}

const canAfford3 = (itemPrice, accountBalance) => 
    (itemPrice > accountBalance)?
        "Cannot afford":
        "Can afford";


const myAccountBalance = 1000;
const drone = 1001;
const chair = 299;
console.log(canAfford3(drone, myAccountBalance));
console.log(canAfford3(chair, myAccountBalance));

const rating = 9;

rating>5?
    console.log("This movie is great"):
    console.log("");

rating< 10 && rating>5 && console.log("This movie is great!");