const ethereumButton = document.querySelector('.listner');

require('dotenv').config();

ethereumButton.addEventListener('click', () => {
  listner(1);
});

import TokenAbi from "../artifacts/contracts/Token.sol/Token.json" assert { type: 'json' };
import WrappedTokenAbi from "../artifacts/contracts/WrappedToken.sol/WrappedToken.json" assert { type: 'json' };
import {  TokenAddr, WrappedTokenAddr } from './helper.js';


async function listner() {
  const provider = ethers.getDefaultProvider(process.env.PROVIDER);
  const TokenContract = new ethers.Contract(
    TokenAddr,
    TokenAbi.abi,
    provider
  );

  const provider2 = ethers.getDefaultProvider(process.env.PROVIDER2);
  const signer2 = new ethers.Wallet(process.env.PRIVATE_KEY2, provider2);
  const WrappedTokenContract = new ethers.Contract(
    WrappedTokenAddr,
    WrappedTokenAbi.abi,
    signer2
  );

  TokenContract.on("TrasnferToHell", async (from, to, amount) => {
    console.log(
      from,
      to,
      amount
    );

    const mint = await WrappedTokenContract.mint(to, amount)
    await mint.wait()
  })

}