'use strict';
const fs = require('fs')
const peers = JSON.parse(fs.readFileSync(__dirname + '/fixture/peers.json', 'utf8'))
const coinnames = Object.keys(peers)
const protocol = {
    h:"http",
    g:"https",
    s:"ssl",
    t:"tcp",
    p:"pruning",
}
const port_default = {
    h:8081,
    g:8082,
    s:50002,
    t:50001,
    p:null,
}

const getPeers = (coinname) => {
    if(coinnames.includes(coinname)){
        return peers[coinname]
    }
    else return []
}

const parser = (fields) => {
    if(fields.length < 2){
        throw new Error('parse error')
    }
    const host = fields[0]
    const result = fields.slice(1).reduce((r,v)=> {
        const protocol_short = v.slice(0, 1)
        const port = parseInt(v.slice(1)) || port_default[v.slice(0, 1)]
        r[protocol[protocol_short]] = port
        return r
    }, {host:host, ssl:null, tcp:null, pruning:null, http:null, https:null})
    return result
}

const parsePeerString = (peerstring) => parser(peerstring.split(' '))
const getDefaultPeers = (coinname) => getPeers(coinname).map(parsePeerString)
const getDefaultCoinNames = () => coinnames

exports.parsePeerString = parsePeerString
exports.getDefaultPeers = getDefaultPeers
exports.getDefaultCoinNames = getDefaultCoinNames

