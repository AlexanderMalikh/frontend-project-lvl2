// import defaultRender from './formatters/defaultformatter';
import plainRender from './formatters/plainformatter';
// import jsonRender from './formatters/jsonformatter';
import parse, { parseFile } from './parser';

export default (filePath1, filePath2, formatter = plainRender) => {
  const file1 = parseFile(filePath1);
  const file2 = parseFile(filePath2);
  const ast = (parse(file1, file2));
  // console.log(ast);
  return formatter(ast);
};
