import _ from 'lodash';

const statuses = [
  {
    status: 'tree',
    check: (obj1, obj2, key) => (_.has(obj1, key) && _.has(obj2, key)
      && _.isObject(obj1[key]) && _.isObject(obj2[key])),
    action: (obj1, obj2, key, func) => ({ children: func(obj1[key], obj2[key]) }),
  },
  {
    status: 'unchanged',
    check: (obj1, obj2, key) => _.has(obj1, key) && _.has(obj2, key) && obj1[key] === obj2[key],
    action: (obj1, obj2, key) => ({ beforeValue: obj1[key] }),
  },
  {
    status: 'changed',
    check: (obj1, obj2, key) => _.has(obj1, key) && _.has(obj2, key) && obj1[key] !== obj2[key],
    action: (obj1, obj2, key) => ({ beforeValue: obj1[key], afterValue: obj2[key] }),
  },
  {
    status: 'added',
    check: (obj1, obj2, key) => !_.has(obj1, key) && _.has(obj2, key),
    action: (obj1, obj2, key) => ({ afterValue: obj2[key] }),
  },
  {
    status: 'removed',
    check: (obj1, obj2, key) => _.has(obj1, key) && !_.has(obj2, key),
    action: (obj1, obj2, key) => ({ beforeValue: obj1[key] }),
  },
];
const buildAst = (file1obj, file2obj) => {
  const keys = _.union(_.keys(file1obj), _.keys(file2obj));
  const ast = keys.map((key) => {
    const { status, action } = statuses.find(({ check }) => check(file1obj, file2obj, key));
    const { beforeValue, afterValue, children } = action(file1obj, file2obj, key, buildAst);
    return {
      status,
      key,
      beforeValue,
      afterValue,
      children,
    };
  });
  return ast;
};
export default buildAst;
