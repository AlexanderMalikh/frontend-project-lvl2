import yaml from 'js-yaml';
import ini from 'ini';

const parsers = {
  yml: yaml.safeLoad,
  json: JSON.parse,
  ini: ini.parse,
};

export default (data, format) => {
  const parse = parsers[format];
  return parse(data);
};
