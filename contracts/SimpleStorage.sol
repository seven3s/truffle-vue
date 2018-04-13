pragma solidity ^0.4.18;

contract SimpleStorage {
  uint storedData;
  address public owner;
  /**
   * @dev The SimpleStorage constructor sets the original `owner` of the contract to the sender
   * account.
   */
  function SimpleStorage() public {
    owner = msg.sender;
  }

  function set(uint x) public {
    storedData = x;
  }

  function get() public view returns (uint) {
    return storedData;
  }
}
