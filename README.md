# NFT Collection

This JavaScript program is an "NFT Collection" program that simulates the working of smart contracts on a blockchain network.

## Description

This is a JavaScript program that simulates the working of a smart contract on a blockchain network by implementing the actions of a smart contract through functions. First, I have created a dynamic array through which the functions will interact with the given metadata.

It has three functions:

* `mintNFT()` function stores metadata inside an array.
* `listNFT()` function iterates through the array to display the metadata.
* `getTotalSupply()` function displays the total number of NFTs, which is equal to the length of the array.

## Getting Started

### Executing program

* To run this program, you can use any online/offline JavaScript compiler. You can either directly download the file present inside the repository and run it on any JavaScript IDE of your choice, or follow these steps:
  * Online: Open any online IDE that supports JavaScript and copy-paste the code provided below.
  * Offline: Open your offline IDE (like VS Code). Create a file with a `.js` extension and copy-paste the code provided below.

```javascript
// create a variable to hold your NFT's

var Nfts = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, age, accessory , nftAddress) {
    nftAddress = {
        "name": name,
        "age" : parseInt(age) ,
        "accessory": accessory,
        "address": nftAddress,
    }

    Nfts.push(nftAddress);
    
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(i = 0 ; i < Nfts.length ; i++){
        console.log("name " + Nfts[i]["name"],", age " + Nfts[i]["age"],", accessory " +Nfts[i]["accessory"],", address " +Nfts[i]["address"]  );
    }

}

```

* To interact with this program, you have to call its functions. This can be done by copying and pasting the snippet provided below or using it as a reference to call the functions in your own way.

```javascript
mintNFT("chimpu",18,"banana","12ashd");
mintNFT("chinki",19,"Gun","49dashd");
console.log("Nfts metadata:")
listNFTs();
getTotalSupply();
```

## Authors

**Vansh Pratap**

## Additional

[Link](#addYourLoomVidoeLinkHere") to my video explanation.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
