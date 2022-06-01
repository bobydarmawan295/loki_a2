const { Router } = require('express');
const authController = require('../controller/auth');
const {getUsers}= require('../controller/users');
const express = require("express");
const { get } = require('express/lib/request');

const router = Router();
router.use(express.json());

router.get('/signup',  authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);


router.get('/res', getUsers);

module.exports = router;