// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20, ERC20Burnable, Ownable { //ethereum
    constructor() ERC20("MyToken1", "MTK1") {
        _mint(msg.sender, 234 * 10 ** decimals());
    }

    event TrasnferToHell(address from, address to, uint256 amount);

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }


    function transferTo(address to, uint amount) public {
        burn(amount);
        emit TrasnferToHell(msg.sender, to, amount);
    }
}