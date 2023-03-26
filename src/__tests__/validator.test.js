import Validator from '../js/validator';

test('check the validator for doesnt errors', () => {
  const nick = new Validator();
  const checkNickname = 'Bowerman_test';
  expect(nick.validateUsername(checkNickname)).toBe(true);
});

test('check the validator for doesnt errors', () => {
  const nick = new Validator();
  const checkNickname = 'Bowerman-test';
  expect(nick.validateUsername(checkNickname)).toBe(true);
});

test('check the validator for errors', () => {
  const nick = new Validator();
  const checkNickname = '1111111111111111dsadsa';
  expect(nick.validateUsername(checkNickname)).toBe(false);
});

test('check the validator for errors', () => {
  const nick = new Validator();
  const checkNickname = 'dsadsa11111111111111111111';
  expect(nick.validateUsername(checkNickname)).toBe(false);
});

test('check the validator for errors', () => {
  const nick = new Validator();
  const checkNickname = 'Угольный человек';
  expect(nick.validateUsername(checkNickname)).toBe(false);
});

test('check the validator for errors', () => {
  const nick = new Validator();
  const checkNickname = 'Test1';
  expect(nick.validateUsername(checkNickname)).toBe(false);
});

test('check the validator for errors', () => {
  const nick = new Validator();
  const checkNickname = '1Test';
  expect(nick.validateUsername(checkNickname)).toBe(false);
});

test('check the validator for errors', () => {
  const nick = new Validator();
  const checkNickname = '-Test';
  expect(nick.validateUsername(checkNickname)).toBe(false);
});

test('check the validator for errors', () => {
  const nick = new Validator();
  const checkNickname = '_Test';
  expect(nick.validateUsername(checkNickname)).toBe(false);
});

test('check the validator for errors', () => {
  const nick = new Validator();
  const checkNickname = 'Test-';
  expect(nick.validateUsername(checkNickname)).toBe(false);
});

test('check the validator for errors', () => {
  const nick = new Validator();
  const checkNickname = 'Test_';
  expect(nick.validateUsername(checkNickname)).toBe(false);
});
