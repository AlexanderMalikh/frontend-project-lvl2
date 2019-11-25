import jsonRender from './jsonRender';
import plainRender from './plainRender';
import treeRender from './treeRender';

export default (ast, format = 'any') => {
  if (format === 'plain') return plainRender(ast);
  if (format === 'json') return jsonRender(ast);
  return treeRender(ast);
};
