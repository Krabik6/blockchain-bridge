import { ethers } from "hardhat";

async function main() {


  const WrappedToken = await ethers.getContractFactory("WrappedToken");
  const wrappedToken = await WrappedToken.deploy();

  await wrappedToken.deployed();

  console.log(`wrapped token deployed to:`, wrappedToken.address);

  const fs = require('fs');

  try {
    const addObj = {
      wrappedTokenAddress: wrappedToken.address,
    };
    await fs.promises.writeFile('scripts/ext/file2.json', JSON.stringify(addObj));
  } catch (err) {
    console.log(err);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
