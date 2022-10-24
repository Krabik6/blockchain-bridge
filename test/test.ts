import {loadFixture} from "@nomicfoundation/hardhat-network-helpers"
import { expect } from "chai";
import { ethers } from "hardhat";
import {Token, Token__factory, WrappedToken, WrappedToken__factory} from "../typechain-types";


describe("brige dude", function(){
  async function deploy() {
    const [deployer, user] = await ethers.getSigners();

    const TokenFactory = await ethers.getContractFactory("Token");
    const Token = await TokenFactory.deploy() as Token;
    await Token.deployed();

    const WrappedTokenFactory = await ethers.getContractFactory("WrappedToken");
    const WrappedToken = await WrappedTokenFactory.deploy() as WrappedToken;
    await WrappedToken.deployed();

    return {Token, WrappedToken, deployer, user}
  }

  it("Should emit MyEventWithData", async function () {
    const {Token, WrappedToken, deployer} = await loadFixture(deploy);
    const amount = 1000

    const approve = await Token.approve(deployer.address, amount)
    await approve.wait()

    await expect(Token.transferTo(deployer.address, amount))
      .to.emit(Token, "TrasnferToHell") 
      .withArgs(deployer.address, deployer.address, amount);
  });



})