import _ from 'lodash';

const buildAst = (file1obj, file2obj) => {
  // collect unique keys
  const keys = [...Object.keys(file1obj),
    ...Object.keys(file2obj).filter((key) => !_.has(file1obj, key))];

  const ast = keys.reduce((acc, key) => {
    const file1value = file1obj[key];
    const file2value = file2obj[key];
    if (_.has(file1obj, key) && _.has(file2obj, key)) {
      if (file1value === file2value) {
        return { ...acc, [key]: { value: file1value, status: 'unchanged' } };
      }
      if (typeof file1value === 'object' && typeof file2value === 'object') {
        return { ...acc, [key]: { children: buildAst(file1value, file2value), status: 'changed' } };
      }
      return { ...acc, [key]: { value: { oldValue: file1value, newValue: file2value }, status: 'changed' } };
    }
    if (!_.has(file1obj, key) && _.has(file2obj, key)) {
      return { ...acc, [key]: { value: file2value, status: 'added' } };
    }
    return { ...acc, [key]: { value: file1value, status: 'removed' } };
  }, {});
  return ast;
};
export default buildAst;
