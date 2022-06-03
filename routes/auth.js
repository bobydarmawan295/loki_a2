const express = require('express');
const {signup_get, signup_post, login_get, login_post, logout_get, logout_post} = require('../controller/users');
const {authenticateToken} = require('../middleware/verifyToken');
const cookieParser =  require('cookie-parser');


const router = express.Router();

router.use(express.static('public'));
router.use(express.json()); 
router.use(cookieParser());

router.get('/register', signup_get);
router.post('/register', signup_post);
router.get('/login', login_get)
router.post('/login', login_post)
router.get('/logout', logout_get)
router.post('/logout', logout_post)



module.exports = router 