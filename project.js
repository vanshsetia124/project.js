/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

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

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal NFTs Minted: " + Nfts.length);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(i = 0 ; i < Nfts.length ; i++){
        console.log("name " + Nfts[i]["name"],", age " + Nfts[i]["age"],", accessory " +Nfts[i]["accessory"],", address " +Nfts[i]["address"]  );
    }

}

mintNFT("chimpu",18,"banana","12ashd");
mintNFT("chinki",19,"Gun","49dashd");
console.log("Nfts metadata:")
listNFTs();
getTotalSupply();
