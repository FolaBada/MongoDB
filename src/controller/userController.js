const User = require("../model/User");

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    let users = await User.find();
    if (users.length === 0){
        return res.status(404).json({
            success: false,
            message: 'No Users Were Found',
        })
    }
    res.status(200).json({
        success: true,
        message: 'Users found',
        users
    });
  }
   catch (error) {
    res.status(500).json({
        success: false,
        message: 'Internal Server Error',
        error: error.message
    })
  }
};

//create user

exports.createUser = async (req,res)=>{
 try{
    let user = await req.body;
    let created = await User.create(user);
    if(!created)
    return res.status(400).json({
        success: false,
        message: 'User creation failed'
    })
    return res.status(200).json({
        success: true,
        message: 'User created successfully',
        user: created,
    })
    
 }
 catch(error){
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error.message,
    })
 }
}

//get single user
exports.getUser = async (req,res)=>{
    try{
        let id = {_id: req.params.id};
        let user = await User.findOne(id);
        if(!user) return res.status(404).json({
            success: false,
            message: 'User not found',
            user,
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        })
    }
}


//update users

//delete users


