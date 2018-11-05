const Mam = require('../lib/mam.client.js')
const { asciiToTrytes, trytesToAscii } = require('@iota/converter')

// Initialise MAM State - PUBLIC
// let mamState = Mam.init('https://testnet140.tangle.works')
let mamState = Mam.init('https://node06.iotatoken.nl:443')

// mamState.seed = 'PQKYGTGIUIHDLGXROTDORUCWZDYYCDV9JYXJBVWEYCDE9CCJGNYKNVY9KMCPBVGKOVCOXWSIXTMNZZWFL'
// mamState.channel.next_root = 'UAXJXGBDBR9ICUGFZPMT9FMRODDGARFWGQMLDKFMMASGBEVTFJJJVVDRYTQFHRXAWWNMHUXREKZEYWJWJ'
// mamState.channel.start = 4

// Publish to tangle
const publish = async packet => {
    // Create MAM Payload - STRING OF TRYTES
    const trytes = asciiToTrytes(JSON.stringify(packet))
    const message = Mam.create(mamState, trytes)
    // Save new mamState
    mamState = message.state
    // Attach the payload.
    await Mam.attach(message.payload, message.address)

    console.log('Message attached!: address: ', message.address);
}

publish('HELLO')
publish('WORLD')
publish('!')

console.log('MaM state: \n',JSON.stringify(mamState));



// publish('Yet another message :D')

