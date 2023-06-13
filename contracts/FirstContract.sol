// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract FirstContract {
    uint value = 0;
    address sender; 
    
    function getValue() external view returns(uint) { 
        return value;
    }
    
    function setValue(uint _value) external {
        sender = msg.sender;
        value = _value;
    }
    
    function getMsgSender() external view returns(address) { 
        return sender;
    }
    
    
}