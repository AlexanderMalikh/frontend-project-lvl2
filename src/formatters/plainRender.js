import _ from 'lodash';

const stringify = (node) => {
  if (typeof node === 'object') {
    return '[complex value]';
  }
  return `'${node}'`;
};

const plainRender = (ast) => {
  const getStrings = (nodes, parent = '') => Object.keys(nodes).filter((key) => nodes[key].status !== 'unchanged').map((key) => {
    const {
      beforeValue, afterValue, children, status,
    } = nodes[key];
    const mappingByStatus = {
      tree: `${_.flatten(getStrings(children, `${parent}${key}.`)).join('\n')}`,
      changed: `Property \`${parent}${key}\` was updated from ${stringify(beforeValue)} to ${stringify(afterValue)}`,
      added: `Property \`${parent}${key}\` was added with value: ${stringify(afterValue)}`,
      removed: `Property \`${parent}${key}\` was removed`,
    };
    return `${mappingByStatus[status]}`;
  });
  const renderedAst = (_.flatten(getStrings(ast))).join('\n');
  //  console.log(ast);
  return `${renderedAst}`;
};

export default plainRender;
