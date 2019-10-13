import yaml from 'js-yaml';

const fs = require('fs');
const path = require('path');
const ini = require('ini');

const mapping = {
  yml: yaml.safeLoad,
  json: JSON.parse,
  ini: ini.parse,
};

export default (filePath) => {
  const file = fs.readFileSync(filePath, 'utf-8');
  const format = path.extname(filePath).slice(1);
  return mapping[format](file);
};
