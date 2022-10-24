npm i

create .env file
init next variables
PROVIDER = ""
PRIVATE_KEY = ""

PROVIDER2 = ""
PRIVATE_KEY2 = ""

npx hardhat run scripts/deploy.ts --network matic
npx hardhat run scripts/deploy2.ts --network goerli  

npx hardhat run scripts/listener.ts
npx hardhat run scripts/transfer.ts