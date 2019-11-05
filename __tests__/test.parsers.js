import genDiff from '../src';

const fs = require('fs');

const plainJsonBefore = `${__dirname}/__fixtures__/before.json`;
const plainJsonAfter = `${__dirname}/__fixtures__/after.json`;
const plainYamlBefore = `${__dirname}/__fixtures__/before.yml`;
const plainYamlAfter = `${__dirname}/__fixtures__/after.yml`;
const plainIniBefore = `${__dirname}/__fixtures__/before.ini`;
const plainIniAfter = `${__dirname}/__fixtures__/after.ini`;
const nestedJsonBefore = `${__dirname}/__fixtures__/nestedBefore.json`;
const nestedJsonAfter = `${__dirname}/__fixtures__/nestedAfter.json`;
const nestedYmlBefore = `${__dirname}/__fixtures__/nestedBefore.json`;
const nestedYmlAfter = `${__dirname}/__fixtures__/nestedAfter.json`;
const nestedIniBefore = `${__dirname}/__fixtures__/nestedBefore.json`;
const nestedIniAfter = `${__dirname}/__fixtures__/nestedAfter.json`;
const plainResult = fs.readFileSync(`${__dirname}/__fixtures__/plainResult`, 'utf-8');
const nestedResult = fs.readFileSync(`${__dirname}/__fixtures__/nestedResult`, 'utf-8');
const plainFormatterResult = fs.readFileSync(`${__dirname}/__fixtures__/plainFormatterResult`, 'utf-8');

/* test('two plain JSON\'s', () => {
  expect(genDiff(plainJsonBefore, plainJsonAfter)).toBe(plainResult.trimRight());
});
/test('two plain YAML\'s', () => {
  expect(genDiff(plainYamlBefore, plainYamlAfter)).toBe(plainResult.trimRight());
});
test('two plain INI\'s', () => {
  expect(genDiff(plainIniBefore, plainIniAfter)).toBe(plainResult.trimRight());
});
test('two nested JSON\'s', () => {
  expect(genDiff(nestedJsonBefore, nestedJsonAfter)).toBe(nestedResult.trimRight());
});
test('two nested YML\'s', () => {
  expect(genDiff(nestedYmlBefore, nestedYmlAfter)).toBe(nestedResult.trimRight());
});
test('two nested INI\'s', () => {
  expect(genDiff(nestedIniBefore, nestedIniAfter)).toBe(nestedResult.trimRight());
});
*/
test('plain formatter', () => {
  expect(genDiff(nestedJsonBefore, nestedJsonAfter)).toBe(plainFormatterResult.trimRight());
});
