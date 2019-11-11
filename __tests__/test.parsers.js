import fs from 'fs';
import makeDiff from '../src';

const getFixturePath = (filename) => `${__dirname}/__fixtures__/${filename}`;

const data = [
  ['nestedBefore.json', 'nestedAfter.json', 'result', 'default'],
  ['nestedBefore.yml', 'nestedAfter.yml', 'result', 'default'],
  ['nestedBefore.ini', 'nestedAfter.ini', 'result', 'default'],
  ['nestedBefore.json', 'nestedAfter.json', 'plainResult', 'plain'],
  ['nestedBefore.ini', 'nestedAfter.ini', 'jsonResult.json', 'json'],
];

describe('asdashdkjas', () => {
  test.each(data)('compare %s and %s ', (file1, file2, expectation, format = 'default') => {
    const file1path = getFixturePath(file1);
    const file2path = getFixturePath(file2);
    const expectedResult = fs.readFileSync(getFixturePath(expectation), 'utf-8').trimRight();
    expect(makeDiff(file1path, file2path, format)).toBe(expectedResult);
  });
});
