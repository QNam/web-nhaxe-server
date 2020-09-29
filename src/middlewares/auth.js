const jwtService = require('../services/jwtService')

function verifyAccess() {
    return function (req, res, next) {
        const accessToken = jwtService.getTokenFromHeader(req.headers)

        try {
            var decoded = jwtService.verifyAccessToken(accessToken)
            req._user = decoded
            next()
        } catch(err) {
            console.log(err)
            next(err)
        }
    }
}

module.exports = {
    verifyAccess
}