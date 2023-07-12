const express = require('express')
const router = express.Router()
router.post('/medicinedata', (req,res) =>{
    try {
        res.send([global.medicines,global.medicinesCategory])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})
module.exports = router;