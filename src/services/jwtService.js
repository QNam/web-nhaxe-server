const jwt = require("jsonwebtoken");

function getTokenFromHeader (headers) {
    if(!headers.authorization) return null

    let token = headers.authorization
    return token.slice(7, token.length);
}

function generateAccessToken (payload, expiresIn = null) {
    if(!expiresIn) {
        expiresIn = process.env.TOKEN_EXPRIED        
    }
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: expiresIn });
}

function verifyAccessToken (token) {
    return jwt.verify(token, process.env.TOKEN_SECRET)
}

module.exports = {
    generateAccessToken,
    verifyAccessToken,
    getTokenFromHeader
}