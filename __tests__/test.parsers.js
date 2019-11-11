import fs from 'fs';
import makeDiff from '../src';

const getFixturePath = (filename) => `${__dirname}/__fixtures__/${filename}`;

const data = [
  ['nestedBefore.json', 'nestedAfter.json', 'default', 'result'],
  ['nestedBefore.yml', 'nestedAfter.yml', 'default', 'result'],
  ['nestedBefore.ini', 'nestedAfter.ini', 'default', 'result'],
  ['nestedBefore.json', 'nestedAfter.json', 'plain', 'plainResult'],
  ['nestedBefore.ini', 'nestedAfter.ini', 'json', 'jsonResult.json'],
];

describe('format tests', () => {
  test.each(data)('compare %s and %s with %s format', (file1, file2, format = 'default', expectation) => {
    const file1path = getFixturePath(file1);
    const file2path = getFixturePath(file2);
    const expectedResult = fs.readFileSync(getFixturePath(expectation), 'utf-8').trimRight();
    expect(makeDiff(file1path, file2path, format)).toBe(expectedResult);
  });
});
