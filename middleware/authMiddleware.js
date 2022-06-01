const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.status(401).send(`Akses ditolak`);

  jwt.verify(token, process.env.TOKEN, (err, user) => {
    console.log(err)
    if (err) return res.status(403).send(`Token tidak valid`)
    req.user = user
    next()
  })
}

module.exports = authenticateToken;