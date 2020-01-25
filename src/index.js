import fs from 'fs';
import path from 'path';
import buildAst from './astBuilder';
import parse from './parser';
import getFormattedOutput from './formatters';

const getParsedFileContent = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  const format = path.extname(filePath).slice(1);
  return parse(data, format);
};

export default (fileBefore, fileAfter, format) => {
  const parsedFileBefore = getParsedFileContent(fileBefore);
  const parsedFileAfter = getParsedFileContent(fileAfter);
  const ast = buildAst(parsedFileBefore, parsedFileAfter);
  return getFormattedOutput(ast, format);
};
