import fs from 'fs';
import path from 'path';
import buildAst from './astBuilder';
import parse from './parser';
import getFormattedOutput from './formatters';

export const getFileContent = (filePath) => {
  const file = fs.readFileSync(filePath, 'utf-8');
  const format = path.extname(filePath).slice(1);
  return { file, format };
};

export default (fileBefore, fileAfter, format) => {
  const parsedFileBefore = parse(getFileContent(fileBefore));
  const parsedFileAfter = parse(getFileContent(fileAfter));
  const ast = buildAst(parsedFileBefore, parsedFileAfter);
  return getFormattedOutput(ast, format);
};
