import _ from 'lodash';

const makeIndent = (deep) => '  '.repeat(deep);

const stringify = (node, deep = 0) => {
  if (_.isObject(node)) {
    const content = _.keys(node).map((elem) => `{\n${makeIndent(deep + 2)}${elem}: ${node.key}\n${makeIndent(deep)}}`).join('\n');
    return `${content}`;
  }
  return node;
};

const mapByStatus = {
  tree: (item, deep, func) => `${makeIndent(deep)}${item.key}: ${(func(item.children, deep + 2))}`,
  unchanged: (item, deep) => `${makeIndent(deep)}${item.key}: ${stringify(item.beforeValue, deep)}`,
  changed: (item, deep) => [`${makeIndent(deep - 1)}+ ${item.key}: ${stringify(item.afterValue, deep)},
    ${makeIndent(deep - 1)}- ${item.key}: ${stringify(item.beforeValue, deep)}`],
  added: (item, deep) => `${makeIndent(deep - 1)}+ ${item.key}: ${stringify(item.afterValue, deep)}`,
  removed: (item, deep) => `${makeIndent(deep - 1)}- ${item.key}: ${stringify(item.beforeValue, deep)}`,
};

const treeRender = (ast, deep = 2) => {
  console.log(ast);
  const getStrings = ast.map((node) => mapByStatus[node.status](node, deep, treeRender));
  const renderedAst = _.flatten(getStrings).join('\n');
  return `{\n${renderedAst}\n}`;
};

export default treeRender;
