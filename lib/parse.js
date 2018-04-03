'use strict';
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

exports.parsePeerString = parsePeerString
exports.parser = parser
exports.protocol = protocol
exports.port_default = port_default

