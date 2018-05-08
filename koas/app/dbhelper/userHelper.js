const monk = require('monk')
const url = 'user:123456@localhost:27017/test'
const db = monk(url)

module.exports = db