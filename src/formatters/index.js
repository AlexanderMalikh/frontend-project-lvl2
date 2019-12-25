import plainRender from './plainRender';
import treeRender from './treeRender';

export default (ast, format = 'tree') => {
  switch (format) {
    case 'plain':
      return plainRender(ast);
    case 'json':
      return JSON.stringify(ast);
    default:
      return treeRender(ast);
  }
};
