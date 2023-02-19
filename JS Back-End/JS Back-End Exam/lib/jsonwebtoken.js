const jwtSync = require('jsonwebtoken');
const util = require('util');
const jwt = {
    sign: util.promisify(jwtSync.sign),
    verify: util.promisify(jwtSync.verify),
}

module.exports = jwt;