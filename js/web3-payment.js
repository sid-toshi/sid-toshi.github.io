// In all dapp browsers, there will be a 'web3' variable defined in the global context
// By checking for its definition, you can sniff out whether your site is in a dapp browser

if (typeof web3 !== 'undefined') {
  // we're in a dapp browser!
  // show a pay button
}


function onPayButtonPressed() {
  let value = 10000 //10,000 WEI
  let transaction = {
    to: '0x...', //your Ethereum address
    value: '0x'+value.toString(16), //the value of the transaction, as a '0x'-prefixed hex-encoded WEI integer
  }

  web3.eth.sendTransaction(transaction, (error, result) => {
    if (error) {
      //oh dear!
    } else {
      //hurrah!
      //keep in mind success here is referring to the success of submitting the transaction
      //to the network, but not necessarily to its inclusion and confirmation in the blockchain
    }
  })
}
