import yaml from 'js-yaml';
import _ from 'lodash';

const fs = require('fs');
const path = require('path');
const ini = require('ini');

const mappingByFormat = {
  yml: yaml.safeLoad,
  json: JSON.parse,
  ini: ini.parse,
};

export const parseFile = (filePath) => {
  const file = fs.readFileSync(filePath, 'utf-8');
  const format = path.extname(filePath).slice(1);
  return mappingByFormat[format](file);
};

const buildDiffAst = (file1, file2) => {
  const keys = [...Object.keys(file1), ...Object.keys(file2).filter((key) => !_.has(file1, key))];

  const ast = keys.reduce((acc, key) => {
    const file1value = file1[key];
    const file2value = file2[key];
    if (_.has(file1, key) && _.has(file2, key)) {
      if (file1value === file2value) {
        return { ...acc, [key]: { value: file1value, status: 'unchanged' } };
      }
      if (typeof file1value === 'object' && typeof file2value === 'object') {
        return { ...acc, [key]: { children: buildDiffAst(file1value, file2value), status: 'changed' } };
      }
      return { ...acc, [key]: { value: { oldValue: file1value, newValue: file2value }, status: 'changed' } };
    }
    if (!_.has(file1, key) && _.has(file2, key)) {
      return { ...acc, [key]: { value: file2value, status: 'added' } };
    }
    return { ...acc, [key]: { value: file1value, status: 'removed' } };
  }, {});
  return ast;
};
export default buildDiffAst;
