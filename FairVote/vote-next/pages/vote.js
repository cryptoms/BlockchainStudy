import web3 from "./web3";

const address = "0x3bc6381aA81AE4c91560EB4ba2d46517450E42bb";

const abi = [
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "candidates",
    outputs: [
      { name: "name", type: "bytes32" },
      { name: "age", type: "uint8" }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_candidateName", type: "bytes32" }],
    name: "validCandidate",
    outputs: [{ name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "bytes32" }],
    name: "votesReceived",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      { name: "_candidateName", type: "bytes32" },
      { name: "_age", type: "uint8" }
    ],
    name: "createCandidates",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "", type: "address" }],
    name: "voters",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "_candidateName", type: "bytes32" }],
    name: "viewReceivedCandidate",
    outputs: [{ name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [{ name: "_candidateName", type: "bytes32" }],
    name: "voteForCandidate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getNumberofCandidates",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: "candidateName", type: "bytes32" },
      { indexed: false, name: "arrayId", type: "uint256" }
    ],
    name: "eCandidateList",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: "", type: "address" }],
    name: "eAlreadyVoted",
    type: "event"
  }
];

export default new web3.eth.Contract(abi, address);
