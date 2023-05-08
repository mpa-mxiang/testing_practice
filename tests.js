import { stringLength, capitalize } from "./functions.js";
test('stringLength should return the correct count', () => {
    expect(stringLength('hello')).toBe(5);
});

test('stringLength should throw an error if the string is empty', () => {
    expect(() => stringLength('')).toThrow('String must be at least 1 character long');
});

test('stringLength should throw an error if the string is too long', () => {
    expect(() => stringLength('this string is too long')).toThrow('String must not be longer than 10 characters');
});

test('stringLength should not throw an error if the string is within the correct length range', () => {
    expect(() => stringLength('hello')).not.toThrow();
});

test('capitalize function capitalizes the first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });