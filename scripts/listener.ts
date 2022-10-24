import { ethers } from "hardhat";
require('dotenv').config();
import { TokenAddr, WrappedTokenAddr } from './ext/helper';

import TokenAbi from "../artifacts/contracts/Token.sol/Token.json";
import WrappedTokenAbi from "../artifacts/contracts/WrappedToken.sol/WrappedToken.json";

async function main() {
  const provider = ethers.getDefaultProvider(process.env.PROVIDER);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  const TokenContract = new ethers.Contract(
    TokenAddr,
    TokenAbi.abi,
    signer
  );

  const provider2 = ethers.getDefaultProvider(process.env.PROVIDER2);
  const signer2 = new ethers.Wallet(process.env.PRIVATE_KEY2!, provider2);
  const WrappedTokenContract = new ethers.Contract(
    WrappedTokenAddr,
    WrappedTokenAbi.abi,
    signer2
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

