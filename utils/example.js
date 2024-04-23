const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// create the merkle tree for the whole nice list
const merkleTree = new MerkleTree(niceList);

// get the root
const root = merkleTree.getRoot();

// Trying a name not in the list
const nameNotInList = 'John Doe';
const indexNotInList = niceList.findIndex(n => n === nameNotInList);
const proofNotInList = merkleTree.getProof(indexNotInList);

// Verify proof for name not in the list against the Merkle Root
console.log(verifyProof(proofNotInList, nameNotInList, root)); // false, John Doe is not in the list

// Trying a fake proof
const fakeProof = [{
  data: '0x123456789', // Random data
  left: 1, // Assuming it's on the left
}];

// Verify the fake proof against the Merkle Root
console.log(verifyProof(fakeProof, name, root)); // false, the proof is invalid
