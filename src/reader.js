const Mam = require('../lib/mam.client.js')
const { asciiToTrytes, trytesToAscii } = require('@iota/converter')

// Initialise MAM State - PUBLIC
// let mamState = Mam.init('https://testnet140.tangle.works')
let mamState = Mam.init('https://node06.iotatoken.nl:443')

const root = 'CMUZIGBHOIXLIBYTYPMJSXQXL9RQVULKEQHCBQPIVSFLO9VPXDPMSIIQFLTICSLUALWOOKEDZJQCSWCCL'


// Callback used to pass data out of the fetch
const logData = data => console.log('Message Received:',JSON.parse(trytesToAscii(data)))

const exec = async () => {
  const resp = await Mam.fetch(root, 'public', null, logData)
  console.log(resp);
}


exec()

// setInterval(exec, 1000)