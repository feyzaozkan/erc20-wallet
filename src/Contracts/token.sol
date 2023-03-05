// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.1/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.8.1/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.8.1/access/Ownable.sol";

contract HappyMonsterToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("HappyMonsterToken", "HMT") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
