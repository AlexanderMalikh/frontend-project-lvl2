import plainRender from './formatters/plainRender';
import jsonRender from './formatters/jsonRender';
import defaultRender from './formatters/defaultRender';
import buildAst from './astBuilder';
import parse from './parser';

export default (filePath1, filePath2, format) => {
  const file1 = parse(filePath1);
  const file2 = parse(filePath2);
  const ast = buildAst(file1, file2);
  // console.log(ast);
  if (format === 'plain') return plainRender(ast);
  if (format === 'json') return jsonRender(ast);
  return defaultRender(ast);
};
