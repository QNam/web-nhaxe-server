const express = require('express');
const router = express.Router();
// const { generateAccessToken, verifyAccessToken, getTokenFromHeader } = require('../services/jwtService')
const { verifyAccess } = require('../middlewares/auth')
const { Web } = require('../dbConfig')

router.get('/', verifyAccess(), (req, res, next) => {
    let subDomain = req.query.subDomain

    if(!subDomain) {
        const result = {
            success: false,
            statusCode: 400,
            data: {
            }
        }

        res.status(400).send(result)
        return
    }

    Web.findBySubDomain(subDomain).then(function (data) {
        const result = {
            success: true,
            statusCode: 200,
            data: {
                web: data
            }
        }

        res.status(200).send(result)
    })
})

module.exports = router