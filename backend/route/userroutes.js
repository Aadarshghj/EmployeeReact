const express = require('express'
);
const router =express.Router();
const UserModel = require('../model/userModel');
router.use(express.json());

router.post('/login', async (req,res)=>{
try {
    const user = await UserModel.findOne({email:req.body.email});
    if(!user){
        res.send('user not found');

    } else{
if (user.password===req.body.password){
    res.status(200).send('login success')
} else {
    res.status(400).send('invalid');
}

    }
    
} catch (error) {
    console.log(error)
}


})

router.post('/s',async(req,res)=>{
try {
    const data = req.body;
    await UserModel(data).save();
    res.status(200).send({message:"data added"});
    
} catch (error) {
    console.log(error)
}

})

module.exports=router;

