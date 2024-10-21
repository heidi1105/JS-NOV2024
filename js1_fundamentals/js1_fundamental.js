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

const animals2 = ["dragon", ...animals, "unicorn"]; // push wihtout .push
console.log(animals)
console.log(animals2)


