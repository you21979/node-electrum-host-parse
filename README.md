# node-electrum-host-parse

## install

```
npm i electrum-host-parse
```

## usage

* code

```
const parse = require('electrum-host-parse')
const hostobject = parse.parsePeerString("electrum-mona.bitbank.cc s50002 t50001")
console.log(hostobject)
```

* result

```
{ host: 'electrum-mona.bitbank.cc',
  ssl: 50002,
  tcp: 50001,
  p: null }
```

