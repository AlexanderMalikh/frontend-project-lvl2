import _ from 'lodash';
import genDiff from '../src/parsers/plain json';

const fs = require('fs');

const plainJsonBefore = `${__dirname}/__fixtures__/before.json`;
const plainJsonAfter = `${__dirname}/__fixtures__/after.json`;
const plainJsonResult = fs.readFileSync(`${__dirname}/__fixtures__/plainJsonResult`, 'utf-8');

test('two plain json\'s', () => {
  expect(genDiff(plainJsonBefore, plainJsonAfter)).toBe(_.trimEnd(plainJsonResult));
});
