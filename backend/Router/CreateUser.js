const express = require('express')
const router = express.Router()
const User = require('../datamodel/User')
const { body, validationResult } = require('express-validator');

const jwt = require('jsonwebtoken')
const jwtSecret = "Thisismynewstringsetasdefault"
const bcrypt = require("bcrypt.js");

router.post("/createuser",[
body('email').isEmail(),
body('password','incorrect-password').isLength({ min: 6 })
]
,async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.has(req.body.password, salt)


    try {
        await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location
        })
    res.json({success:true});
    } catch (error) {
        console.log("ERROR");
        res.json({success:false});
    }
})

router.post("/loginuser",[
    body('email').isEmail(),
body('password','incorrect-password').isLength({ min: 6 })
]
    ,async (req,res)=>{
     let email = req.body.email
        try {
            const errors= validationResult(req);
           let useremail = await User.findOne({email});
           if(!useremail){
            return res.status(400).json({ errors: "Credentials not correct" })
           }
           const pwdCompare = await bcrypt.compare(req.body.password,userData.password)
           if(!pwdCompare){
            return res.status(400).json({ errors: "Credentials not correct" })
           }

            const data = {
                user:{
                    id:userData.id
                }
            }
            const authToken= jwt.sign(data,jwtSecret)
            return res.json({success: true,authToken:authToken})
        } catch (error) {
            console.log("ERROR");
            res.json({success:false});
        }
    })


module.exports = router;