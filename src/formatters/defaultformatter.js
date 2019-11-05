import _ from 'lodash';

const makeIndent = (deep) => '  '.repeat(deep);

const stringify = (node, deep) => {
  if (typeof node === 'object') {
    const content = Object.keys(node).map((key) => {
      if (deep !== 1) return `${makeIndent(deep)}${key}: ${node[key]}\n`;
      return `${makeIndent(deep * 3)}${key}: ${node[key]}\n`;
    });
    return `{\n${makeIndent(deep)}${content}${makeIndent(deep + 1)}}`;
  }
  return node;
};

const defaultFormatter = (ast) => {
  const getStrings = (nodes, deep = 1) => Object.keys(nodes).map((key) => {
    const { value, children, status } = nodes[key];

    if (children !== undefined) {
      return `${makeIndent(deep + 1)}${key}: {\n${_.flatten(getStrings(children, deep + 2)).join('\n')}\n${makeIndent(deep + 1)}}`;
    }

    const mappingByStatus = {
      unchanged: `  ${key}: ${stringify(value, deep)}`,
      changed: `+ ${key}: ${stringify(value.newValue, deep)}\n${makeIndent(deep)}- ${key}: ${stringify(value.oldValue, deep)}`,
      added: `+ ${key}: ${stringify(value, deep)}`,
      removed: `- ${key}: ${stringify(value, deep)}`,
    };
    return `${makeIndent(deep)}${mappingByStatus[status]}`;
  });
  const renderedAst = (_.flatten(getStrings(ast))).join('\n');
  // console.log(ast);
  return `{\n${renderedAst}\n}`;
};

export default defaultFormatter;
