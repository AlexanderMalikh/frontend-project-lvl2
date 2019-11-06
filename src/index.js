// import defaultRender from './formatters/defaultformatter';
import plainRender from './formatters/plainRender';
import jsonRender from './formatters/jsonRender';
import defaultRender from './formatters/defaultRender';
// import jsonRender from './formatters/jsonformatter';
import parse, { parseFile } from './parser';

export default (filePath1, filePath2, format) => {
  const file1 = parseFile(filePath1);
  const file2 = parseFile(filePath2);
  const ast = (parse(file1, file2));
  // console.log(ast);
  if (format === 'plain') return plainRender(ast);
  if (format === 'json') return jsonRender(ast);
  return defaultRender(ast);
};
