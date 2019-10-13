import genDiff from '../src';

const fs = require('fs');

const plainJsonBefore = `${__dirname}/__fixtures__/before.json`;
const plainJsonAfter = `${__dirname}/__fixtures__/after.json`;
const plainYamlBefore = `${__dirname}/__fixtures__/before.yml`;
const plainYamlAfter = `${__dirname}/__fixtures__/after.yml`;
const plainIniBefore = `${__dirname}/__fixtures__/before.ini`;
const plainIniAfter = `${__dirname}/__fixtures__/after.ini`;

const plainResult = fs.readFileSync(`${__dirname}/__fixtures__/plainResult`, 'utf-8');


test('two plain JSON\'s', () => {
  expect(genDiff(plainJsonBefore, plainJsonAfter)).toBe(plainResult);
});
test('two plain YAML\'s', () => {
  expect(genDiff(plainYamlBefore, plainYamlAfter)).toBe(plainResult);
});
test('two plain INI\'s', () => {
  expect(genDiff(plainIniBefore, plainIniAfter)).toBe(plainResult);
});
