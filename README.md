# node-electrum-host-parse

electrum peer string parser

## spec

* http://docs.electrum.org/en/latest/protocol.html#server-peers-subscribe

## install

```
npm i electrum-host-parse
```

## usage

* jscode

```
const parse = require('electrum-host-parse')
const hostobject = parse.parsePeerString("electrum-mona.bitbank.cc s50002 t50001")
console.log(hostobject)
```

* typescript

```
import * as parse from 'electrum-host-parse'
const hostobject = parse.parsePeerString("electrum-mona.bitbank.cc s50002 t50001")
console.log(hostobject)
```

* result

```
{ host: 'electrum-mona.bitbank.cc',
  ssl: 50002,
  tcp: 50001,
  pruning: null,
  http: null,
  https: null }
```

