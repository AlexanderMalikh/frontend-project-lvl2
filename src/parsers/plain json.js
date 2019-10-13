import genDiff from '..';
const fs = require('fs');

export default (file1, file2) => {
  const json1 = JSON.parse(fs.readFileSync(file1, 'utf-8'));
  const json2 = JSON.parse(fs.readFileSync(file2, 'utf-8'));        
  console.log(genDiff(json1, json2));
} 