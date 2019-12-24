import yaml from 'js-yaml';
import ini from 'ini';

const mappingByFormat = {
  yml: yaml.safeLoad,
  json: JSON.parse,
  ini: ini.parse,
};

export default (fileContent) => {
  const { file, format } = fileContent;
  return mappingByFormat[format](file);
};
// парсер должен принять готовый fileContent и отдать в mapping
