import jsonRender from './jsonRender';
import plainRender from './plainRender';
import treeRender from './treeRender';

export default (ast, format = 'tree') => {
  switch (format) {
    case 'plain':
      return plainRender(ast);
    case 'json':
      return jsonRender(ast);
    default:
      return treeRender(ast);
  }
};
