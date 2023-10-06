const express = require('express');

const router = express.Router();
const authController = require('../controller/auth');
router.get('/test',(req,res,next) => {
    res.send({message:'TEst Page'});
});

router.get('/login', authController.getLogin);

router.get('/register', authController.getRegister);


// user
// blog
// login
// register
// logout
// refersh

// blog
// crud
// blogs
// blog detail

// comment
// create comment
// read

module.exports = router;