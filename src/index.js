const _ = require('lodash');

export default (json1, json2) => {
  const keys = _.union(Object.keys(json1), Object.keys(json2));
  const result = keys.reduce((acc, key) => {
    if (_.has(json1, key) && _.has(json2, key)) {
      return json1[key] === json2[key] ? `${acc}  ${key}: ${json1[key]}\n`
        : `${acc}+ ${key}: ${json1[key]}\n- ${key}: ${json2[key]}\n`;
    }
    if (!_.has(json1, key)) return `${acc}+ ${key}: ${json2[key]}\n`;
    return `${acc}- ${key}: ${json1[key]}\n`;
  }, '');
  return _.trimEnd(result);
};
