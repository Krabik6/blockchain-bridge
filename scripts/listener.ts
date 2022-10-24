import { ethers } from "hardhat";
require('dotenv').config();
import { TokenAddr, WrappedTokenAddr } from './ext/helper';

import TokenAbi from "../artifacts/contracts/Token.sol/Token.json";
import WrappedTokenAbi from "../artifacts/contracts/WrappedToken.sol/WrappedToken.json";

async function main() {
  const provider = await ethers.getDefaultProvider(process.env.PROVIDER);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  const TokenContract = new ethers.Contract(
    TokenAddr,
    TokenAbi.abi,
    signer
  );

  const WrappedTokenContract = new ethers.Contract(
    WrappedTokenAddr,
    WrappedTokenAbi.abi,
    signer
  );

  TokenContract.on("TrasnferToHell", async (from: string, to: string, amount: number) => {
    console.log(
      from,
      to,
      amount
    );

    const mint = await WrappedTokenContract.mint(to, amount)
    await mint.wait()
  })

}

main()

