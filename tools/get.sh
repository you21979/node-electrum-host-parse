#!/bin/bash
if [ -e ./electrumx ]; then
    echo
else
    git clone -b 1.2 https://github.com/kyuupichan/electrumx.git
fi
node ./getfixture.js > ../fixture/peers.json
