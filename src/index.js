import buildAst from './astBuilder';
import parse from './parser';
import getFormattedOutput from './formatters';

export default (fileBefore, fileAfter, format) => {
  const parsedFileBefore = parse(fileBefore);
  const parsedFileAfter = parse(fileAfter);
  const ast = buildAst(parsedFileBefore, parsedFileAfter);
  return getFormattedOutput(ast, format);
};
