const ethereumButton = document.querySelector('.transfer');

ethereumButton.addEventListener('click', () => {
  transfer(1, 34567890);
});

import TokenAbi from "../artifacts/contracts/Token.sol/Token.json" assert { type: 'json' };
// import WrappedTokenAbi from "../artifacts/contracts/WrappedToken.sol/WrappedToken.json";
import {  TokenAddr } from './helper';

async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

async function transfer(to, amount) {
  if (typeof window.ethereum !== 'undefined') {
    await requestAccount();
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const TokenContract = new ethers.Contract(
      TokenAddr,
      TokenAbi.abi,
      signer
    );

  
    const approve = await TokenContract.approve(to, amount)
    await approve.wait()
  
  
    const transferTo = await TokenContract.transferTo(to, amount);
    await transferTo.wait();
  }
}
