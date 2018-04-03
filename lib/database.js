'use strict';
const fs = require('fs')
const parse = require('./parse')
const peers = JSON.parse(fs.readFileSync(__dirname + '/../fixture/peers.json', 'utf8'))
const coinnames = Object.keys(peers)

const getPeers = (coinname) => {
    if(coinnames.includes(coinname)){
        return peers[coinname]
    }
    else return []
}

const getDefaultPeers = (coinname) => getPeers(coinname).map(parse.parsePeerString)
const getDefaultCoinNames = () => coinnames

exports.getDefaultPeers = getDefaultPeers
exports.getDefaultCoinNames = getDefaultCoinNames

