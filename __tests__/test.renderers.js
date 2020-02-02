import fs from 'fs';
import makeDiff from '../src';

const getFixturePath = (filename) => `${__dirname}/__fixtures__/${filename}`;

const data = [
  ['nestedBefore.json', 'nestedAfter.json', 'tree', 'result'],
  ['nestedBefore.yml', 'nestedAfter.yml', 'tree', 'result'],
  ['nestedBefore.ini', 'nestedAfter.ini', 'tree', 'result'],
  ['nestedBefore.json', 'nestedAfter.json', 'plain', 'plainResult'],
  ['nestedBefore.ini', 'nestedAfter.ini', 'json', 'jsonResult.json'],
];

describe('format tests', () => {
  test.each(data)('compare %s and %s with %s format', (fileNameBefore, fileNameAfter, format = 'tree', expectedOutput) => {
    const getPathFileBefore = getFixturePath(fileNameBefore);
    const getPathFileAfter = getFixturePath(fileNameAfter);
    const expectedResult = fs.readFileSync(getFixturePath(expectedOutput), 'utf-8').trimRight();
    expect(makeDiff(getPathFileBefore, getPathFileAfter, format)).toBe(expectedResult);
  });
});
