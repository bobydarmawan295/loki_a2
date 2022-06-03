const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const users = require("../models/users");
dotenv.config();


function authenticateToken(req, res, next) {
  const token = req.cookies.jwt;

  if (token == null) return res.status(401).send(`Akses ditolak`);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
    console.log(err)
    if (err) return res.status(403).send(`Token tidak valid`)
      next();
  })
}



function authDosen(req, res, next) {
  const token = req.cookies.jwt;

  if (token == null) return res.status(401).send(`Akses ditolak`);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
    console.log(err)
    if (err) return res.status(403).send(`Token tidak valid`)
    if(decodedToken.type == "D"){
      next();
    }else{
      res.sendStatus(401).send('Unathorized')
      // res.redirect('/auth/login')
    }
    
  })
}

function authAdmin(req, res, next) {
  const token = req.cookies.jwt;

  if (token == null) return res.status(401).send(`Akses ditolak`);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
    console.log(err)
    if (err) return res.status(403).send(`Token tidak valid`)
    if(decodedToken.type == "T"){
      next();
    }else{
      res.sendStatus(401).send('Unathorized')
      // res.redirect('/auth/login')
    }
    
  })
}


function authMahasiswa(req, res, next) {
  const token = req.cookies.jwt;

  if (token == null) return res.status(401).send(`Akses ditolak`);

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
    console.log(err)
    if (err) return res.status(403).send(`Token tidak valid`)
    if(decodedToken.type == "M"){
      next();
    }else{
      res.sendStatus(401).send('Unathorized')
      // res.redirect('/auth/login')
    }
    
  })
}

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await users.findByPk(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};



module.exports = {authenticateToken, authAdmin, authDosen, authMahasiswa, checkUser};

