import _ from 'lodash';
import genDiff from '../src/parsers/plain json';

const fs = require('fs');

test('two plain json\'s', () => {
  expect(genDiff(`${__dirname}/__fixtures__/before.json`, `${__dirname}/__fixtures__/after.json`))
    .toBe(_.trimEnd(fs.readFileSync(`${__dirname}/__fixtures__/plainJsonResult`, 'utf-8')));
});
