const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE;

const generateToken = (userId)=>{
    console.log("🔐 JWT_SECRET:", JWT_SECRET);
console.log("🕒 JWT_EXPIRE:", JWT_EXPIRE);
return jwt.sign({id: userId}, JWT_SECRET,{expiresIn: JWT_EXPIRE})

}


module.exports = generateToken;