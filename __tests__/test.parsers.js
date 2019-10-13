import genDiff from '..';

const fs = require('fs');

const plainJsonBefore = `${__dirname}/__fixtures__/before.json`;
const plainJsonAfter = `${__dirname}/__fixtures__/after.json`;
const plainJsonResult = fs.readFileSync(`${__dirname}/__fixtures__/plainJsonResult`, 'utf-8');
const plainYamlBefore = `${__dirname}/__fixtures__/before.yml`;
const plainYamlAfter = `${__dirname}/__fixtures__/after.yml`;
const plainYamlResult = fs.readFileSync(`${__dirname}/__fixtures__/plainYamlResult`, 'utf-8');


test('two plain JSON\'s', () => {
  expect(genDiff(plainJsonBefore, plainJsonAfter)).toBe(plainJsonResult);
});
test('two plain YAML\'s', () => {
  expect(genDiff(plainYamlBefore, plainYamlAfter)).toBe(plainYamlResult);
});
