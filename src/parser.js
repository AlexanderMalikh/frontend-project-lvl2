import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';
import ini from 'ini';

const mappingByFormat = {
  yml: yaml.safeLoad,
  json: JSON.parse,
  ini: ini.parse,
};

const getFileContent = (filePath) => {
  const file = fs.readFileSync(filePath, 'utf-8');
  const format = path.extname(filePath).slice(1);
  return { file, format };
};

export default (filePath) => {
  const { file, format } = getFileContent(filePath);
  return mappingByFormat[format](file);
};
// парсер не должен читать файл
