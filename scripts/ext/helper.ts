import * as fs from 'fs';

let data = fs.readFileSync('scripts/ext/file.json');
let data2 = fs.readFileSync('scripts/ext/file2.json');
let addsObject = JSON.parse(data.toString());
let addsObject2 = JSON.parse(data2.toString());
const TokenAddr  = addsObject.tokenAddress;
const WrappedTokenAddr  =  addsObject2.wrappedTokenAddress;




export {TokenAddr, WrappedTokenAddr} 
