const axios = require('axios');
//const { keccak256 } = require('ethereum-cryptography/keccak'); // Importing necessary cryptography functions
//2const { bytesToHex } = require('ethereum-cryptography/utils');
const MerkleTree = require('../utils/MerkleTree');
const niceList = require('../utils/niceList.json');

const serverUrl = 'http://localhost:1225';

async function main() {
  const merkleTree = new MerkleTree(niceList); // Creating a Merkle tree from the nice list

  // Get the Merkle root
  const root = merkleTree.getRoot();

  // Randomly choose an index of the nice list
  const randomIndex = Math.floor(Math.random() * niceList.length);

  // Get the proof for the randomly chosen index
  const proof = merkleTree.getProof(randomIndex);

  // Convert the proof into a format suitable for the server
  const formattedProof = proof.map(item => ({
    data: item.data,
    left: item.left ? 1 : 0,
  }));

  // Send the proof and the index to the server
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    root: root,
    index: randomIndex,
    proof: formattedProof,
  });

  console.log({ gift });
}

main();
