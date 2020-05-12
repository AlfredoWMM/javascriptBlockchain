const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
    "chain": [
    {
    "index": 1,
    "timestamp": 1588721179907,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1588721222350,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1588721315407,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "c8eeadcc3a48478bafa0793c0f09ab75",
    "transactionId": "d58ff0d6351a4835a9d5ba54d47d2bc0"
    },
    {
    "amount": 400,
    "sender": "OKWEOWD",
    "recipient": "DOKEKDKOEKD",
    "transactionId": "b3eb7510416e426385ad412ad658a3a9"
    },
    {
    "amount": 10,
    "sender": "ALKMDKS9",
    "recipient": "KJDIJ28D",
    "transactionId": "aaa896eb235c4b00b7489edec4ff07c2"
    },
    {
    "amount": 2,
    "sender": "KDWIJDF8",
    "recipient": "KF83J38FDJWD",
    "transactionId": "d4ce4e3fd40e41cebc610a03ef564601"
    }
    ],
    "nonce": 23748,
    "hash": "0000c5bb189b1a7b018c0bac02afde65df85d354bcc24e0ac7edb7696a703d7c",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1588721357576,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "c8eeadcc3a48478bafa0793c0f09ab75",
    "transactionId": "3e622a76a2024b9492c45ad5c2acbbb9"
    },
    {
    "amount": 1,
    "sender": "KDWIJDF8",
    "recipient": "KF83J38FDJWD",
    "transactionId": "1d09d1ac3bd245dabfcc7184f655bf05"
    },
    {
    "amount": 90,
    "sender": "KDWIJDF8",
    "recipient": "KF83J38FDJWD",
    "transactionId": "56aed85187e7435d802933dfeb0874b0"
    },
    {
    "amount": 70,
    "sender": "KDWIJDF8",
    "recipient": "KF83J38FDJWD",
    "transactionId": "9ca9a7ea31eb4fb288a6a21481f363c9"
    }
    ],
    "nonce": 72458,
    "hash": "0000ee4ce3ac5190001fd02d803f1b5be3cde153aec531a0b0d326625034755e",
    "previousBlockHash": "0000c5bb189b1a7b018c0bac02afde65df85d354bcc24e0ac7edb7696a703d7c"
    },
    {
    "index": 5,
    "timestamp": 1588721382834,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "c8eeadcc3a48478bafa0793c0f09ab75",
    "transactionId": "dd4f1d6c5d87412d9096f874fe114669"
    }
    ],
    "nonce": 50945,
    "hash": "00009b6bdb8c98775c2a0b379628c699d6734fa1333d4c04085d49aee15e5b68",
    "previousBlockHash": "0000ee4ce3ac5190001fd02d803f1b5be3cde153aec531a0b0d326625034755e"
    },
    {
    "index": 6,
    "timestamp": 1588721387113,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "c8eeadcc3a48478bafa0793c0f09ab75",
    "transactionId": "c37021130f954341b67a539e3ff69414"
    }
    ],
    "nonce": 63338,
    "hash": "0000213adc073026a0d347bd387ef0f6985f9abd2c638a627674156573877627",
    "previousBlockHash": "00009b6bdb8c98775c2a0b379628c699d6734fa1333d4c04085d49aee15e5b68"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "c8eeadcc3a48478bafa0793c0f09ab75",
    "transactionId": "e71b90a851134c26bdef49edf86cca62"
    }
    ],
    "currentNodeUrl": "http://localhost:3002",
    "networkNodes": []
    };



console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));