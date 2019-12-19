import _ from 'lodash';

const indentLevel = 1; // внутренний отступ
const indentLength = 2; // внешний отступ
const makeIndent = (deep, level = 0) => '  '.repeat(deep - level);

const stringify = (node, deep = 0) => {
  if (_.isObject(node)) {
    const content = _.keys(node).map((elem) => `${makeIndent(deep + 1, indentLevel)}${elem}: ${stringify(node[elem], deep + indentLength)}`).join('\n');
    return `{\n${content}\n${makeIndent(deep, indentLength)}}`; // отступ для } = накопленный отступ - внешний отступ
  }
  return node;
};

const mapByStatus = {
  tree: (item, deep, func) => `${makeIndent(deep)}${item.key}: ${(func(item.children, deep + indentLength))}`,
  unchanged: (item, deep) => `${makeIndent(deep)}${item.key}: ${stringify(item.beforeValue, deep)}`,
  changed: (item, deep) => [`${makeIndent(deep, indentLevel)}+ ${item.key}: ${stringify(item.afterValue, deep + indentLength)}`,
    `${makeIndent(deep, indentLevel)}- ${item.key}: ${stringify(item.beforeValue, deep + indentLength)}`],
  added: (item, deep) => `${makeIndent(deep, indentLevel)}+ ${item.key}: ${stringify(item.afterValue, deep + indentLength)}`,
  removed: (item, deep) => `${makeIndent(deep, indentLevel)}- ${item.key}: ${stringify(item.beforeValue, deep + indentLength)}`,
};

const treeRender = (ast, deep = indentLength) => {
  // console.log(ast);
  const getStrings = ast.map((node) => mapByStatus[node.status](node, deep, treeRender));
  const renderedAst = _.flatten(getStrings).join('\n');
  return `{\n${renderedAst}\n${makeIndent(deep, indentLength)}}`;
};

export default treeRender;
