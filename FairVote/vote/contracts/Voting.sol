pragma solidity ^0.4.18;

contract Voting {

  //members
  struct Candidate {
      bytes32 name;
      uint8 age;
  }

  Candidate[] public candidates;

  address public owner;
  mapping (bytes32 => uint8) public votesReceived;
  mapping (address => uint8) public voters;


  //Event
  event eCandidateList(bytes32 candidateName, uint arrayId);
  //event evalidCandidate(bytes32 candidateName, bytes32 _candidateName,uint arrayId);
  event eAlreadyVoted(address);

  //modifier
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  //Constructor
  function Voting() public {
      owner = msg.sender;
  }

  function createCandidates(bytes32 _candidateName, uint8 _age) public onlyOwner  {
    uint _id = candidates.push(Candidate(_candidateName,_age)) -1;
    emit eCandidateList(_candidateName, _id);
  }



  function voteForCandidate(bytes32 _candidateName) public {
    require(validCandidate(_candidateName)); //validate candidateList

    if (voters[msg.sender] > 0) {
        emit eAlreadyVoted(msg.sender);
    } else {
        votesReceived[_candidateName] += 1;
        voters[msg.sender] = 1;
    }
  }

  function viewReceivedCandidate(bytes32 _candidateName) public view returns (uint8){
    return (votesReceived[_candidateName]);
  }

  function getNumberofCandidates() public view returns(uint){
    return (candidates.length);
  }

  function getVoteReceived() public view returns (address[]){
    return
  }


  function validCandidate(bytes32 _candidateName) public returns (bool) {
    for(uint i = 0; i < candidates.length; i++) {
      //emit evalidCandidate(candidates[i].name, _candidateName, i);
      if (candidates[i].name == _candidateName) {
        return true;
      }
    }
    return false;
   }

}
