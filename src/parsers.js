import yaml from 'js-yaml';

const fs = require('fs');

const mapping = {
  yml: yaml.safeLoad,
  json: JSON.parse,
};

export default (filePath) => {
  const file = fs.readFileSync(filePath, 'utf-8');
  const format = filePath.split('.')[1];
  return mapping[format](file);
};
