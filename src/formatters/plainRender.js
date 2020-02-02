import _ from 'lodash';

const stringify = (node) => {
  if (!_.isObject(node)) {
    return `'${node}'`;
  }
  return '[complex value]';
};

const mappingByStatus = {
  tree: (item, parent, func) => `${func(item.children, `${parent}${item.key}.`)}`,
  changed: (item, parent) => `Property '${parent}${item.key}' was updated from ${stringify(item.beforeValue)} to ${stringify(item.afterValue)}`,
  added: (item, parent) => `Property '${parent}${item.key}' was added with value: ${stringify(item.afterValue)}`,
  removed: (item, parent) => `Property '${parent}${item.key}' was removed`,
};

const plainRender = (ast, parent = []) => {
  const getStrings = ast
    .filter((node) => node.status !== 'unchanged')
    .map((node) => mappingByStatus[node.status](node, parent, plainRender));
  const renderedAst = _.flatten(getStrings).join('\n');
  return `${renderedAst}`;
};

export default plainRender;
