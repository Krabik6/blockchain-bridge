import * as fs from 'fs';

let data = fs.readFileSync('scripts/ext/file.json');
let addsObject = JSON.parse(data.toString());
const TokenAddr  = addsObject.tokenAddress;
const WrappedTokenAddr  =  addsObject.wrappedTokenAddress;




export {TokenAddr, WrappedTokenAddr} 
