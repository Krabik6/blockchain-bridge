// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WrappedToken is ERC20, ERC20Burnable, Ownable { //polygon
    constructor() ERC20("MyToken2", "MTK2") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}