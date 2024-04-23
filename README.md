**Merkle Tree Project: Gift List**

**Introduction:**

Welcome to the Merkle Tree Project: Gift List! In this project, i have embarked on a journey to build an application that distributes gifts to individuals listed in a Merkle Tree. This project aims to address the storage problem faced by blockchain networks by utilizing Merkle Trees, which allow for efficient verification of data integrity with minimal storage requirements.

**Overview:**

In blockchain networks like Ethereum, nodes are required to store every value recorded in their shared database, including account balances and smart contract variables. As i have delved into working with smart contracts, it becomes crucial to optimize data storage to reduce costs. The Merkle Tree Project demonstrates a practical application of Merkle Trees to efficiently manage data storage while ensuring the security and integrity of the gift list.

**Project Details:**

The project revolves around a simple yet ingenious idea: distributing gifts to individuals listed in a Merkle Tree while minimizing server memory usage. Here's a breakdown of the project components:

1. **Client:**
   - Located in the `client` folder.
   - The client script sends an HTTP request to the server to claim a gift.
   - Think of the client as the "prover," tasked with proving to the server that a specific name is in the Merkle root.
   - It provides proof of inclusion for a name in the Merkle Tree to the server.

2. **Server:**
   - Located in the `server` folder.
   - The server, implemented as an Express application, responds to client requests.
   - Think of the server as the "verifier," responsible for verifying that the claimed name is indeed in the Merkle root.
   - If the verification succeeds, the server sends the gift to the client.

3. **Utils:**
   - Contains utility files necessary for the project.
   - `niceList.json`: Contains the names of individuals eligible for gifts. You can add names to this list as desired.
   - `example.js`: Demonstrates how to generate a Merkle root, create a proof, and verify inclusion of a value in the root using the proof.
   - `MerkleTree.js`: Modified Merkle Tree module to handle cryptographic type conversions seamlessly.
   - `verifyProof.js`: Provides functionality to prove inclusion of a name in the Merkle root, as demonstrated in the example.

By utilizing Merkle Trees, this project showcases an innovative approach to managing data storage efficiently while ensuring the integrity of the gift list. Through the client-server interaction and the utilization of cryptographic proofs, the project demonstrates how to securely distribute gifts while minimizing server memory usage.

To get started with the project, clone the repository. Happy gifting! 🎁