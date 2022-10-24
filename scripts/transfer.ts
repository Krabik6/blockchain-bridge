import { ethers } from "hardhat";
require('dotenv').config();
import TokenAbi from '../artifacts/contracts/Token.sol/Token.json';
import { TokenAddr, WrappedTokenAddr } from './ext/helper';

async function main() {
  
  const provider = await ethers.getDefaultProvider(process.env.PROVIDER);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
  const TokenContract = new ethers.Contract(
    TokenAddr,
    TokenAbi.abi,
    signer
  );
  const amount = BigInt(10**18*100)

  const approve = await TokenContract.approve(signer.address, amount)
  await approve.wait()


  const transferTo = await TokenContract.transferTo(signer.address, amount);
  await transferTo.wait();


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  