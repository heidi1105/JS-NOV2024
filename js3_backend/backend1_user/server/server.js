// 1. import dependencies
import express from "express";

// 2. configure app
const app = express();
const port = 8000;
app.use(express.json()); // allow json object to be received in the request

// 3. routes & logic
const users = [
    { firstName: "Reimu", lastName: "Hakurei", id:12344524 },
    { firstName: "Marisa", lastName: "Kirisame", id:2342345 },
    { firstName: "Sanae", lastName: "Kochiya", id:3453345 },
    { firstName: "Sakuya", lastName: "Izayoi", id:456456 },
    { firstName: "Momiji", lastName: "Inubashiri", id:35345 }
];   



app.get("/api/testing", (req, res)=>{
    // req: form data , params
    console.log("test") // printed on the terminal
    res.json({name: "Pepper", age: 16}); // will be sent as a response on browser
})

// get all
app.get("/api/users", (req, res)=>{
    res.json(users);
})

// get one
app.get("/api/users/:id", (req, res)=>{
    const paramsId = req.params.id; // To grab the id from the params
    const getUserById = users.find(eachUser=> eachUser.id == paramsId) // logic to grab 1 user based on the id (Not applicable after today)
    res.json(getUserById);
})

// create
app.post("/api/users", (req, res)=>{
    users.push(req.body)
    res.json(users);
})

// update: getOne & create
app.put("/api/users/:id", (req, res) => {
    const paramsId = req.params.id; // to grab the params id
    const reqbody = req.body; // to grab the data sent in the request

    // The logic below will not be applicable after today!!!! 
    users.forEach((user, idx) => {
       if (user.id == req.params.id) {
           user = {...user, ...req.body}
           users[idx] = user;
       }
   })
   const updatedUser = users.find(user=>user.id == req.params.id)
   res.json(updatedUser)
 })
 
// delete
app.delete("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    // The following is not applicable after today
    const index = users.findIndex(user => user.id == userId);
    users.splice(index, 1);
    res.json(users);
});


// 4. listen to the port
app.listen(port, ()=>console.log(`Listening on port: ${port}`));