import genDiff from '..';
import _ from 'lodash';

const fs = require('fs');

export default (file1, file2) => {
  const json1 = JSON.parse(fs.readFileSync(file1, 'utf-8'));
  const json2 = JSON.parse(fs.readFileSync(file2, 'utf-8'));
  return genDiff(json1, json2);
};
