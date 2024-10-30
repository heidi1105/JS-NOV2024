import users from "../models/user.model.js";

const UserController = {
    getAll: (req, res)=>{
        res.json(users);
    },
    addOne: (req, res) =>{
        users.push(req.body)
        res.json(users);
    },
    getOne: (req, res)=>{
        const paramsId = req.params.id; // To grab the id from the params
        const getUserById = users.find(eachUser=> eachUser.id == paramsId) // logic to grab 1 user based on the id (Not applicable after today)
        res.json(getUserById);
    },
    updateOne: (req, res)=>{
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
    },
    deleteOne: (req, res)=>{
        const userId = req.params.id;
        // The following is not applicable after today
        const index = users.findIndex(user => user.id == userId);
        users.splice(index, 1);
        res.json(users);
    }
}

export default UserController;