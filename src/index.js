import render from './render';
import parse, { parseFile } from './parser';

export default (filePath1, filePath2) => {
  const file1 = parseFile(filePath1);
  const file2 = parseFile(filePath2);
  const ast = (parse(file1, file2));
  // console.log(ast);
  return render(ast);
};
