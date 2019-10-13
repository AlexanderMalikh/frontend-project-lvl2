import parser from './parsers';

const _ = require('lodash');

export default (filePath1, filePath2) => {
  const file1 = parser(filePath1);
  const file2 = parser(filePath2);
  const keys = _.union(Object.keys(file1), Object.keys(file2));
  const result = keys.reduce((acc, key) => {
    if (_.has(file1, key) && _.has(file2, key)) {
      return file1[key] === file2[key] ? `${acc}   ${key}: ${file1[key]}\n`
        : `${acc} + ${key}: ${file1[key]}\n - ${key}: ${file2[key]}\n`;
    }
    if (!_.has(file1, key)) return `${acc} + ${key}: ${file2[key]}\n`;
    return `${acc} - ${key}: ${file1[key]}\n`;
  }, '');
  return _.trimEnd(result);
};
