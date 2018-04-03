'use strict'
const parse = require('./lib/parse')
const database = require('./lib/database')
exports.parsePeerString = parse.parsePeerString
exports.getDefaultPeers = database.getDefaultPeers
exports.getDefaultCoinNames = database.getDefaultCoinNames
