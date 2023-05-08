export function stringLength(string) {
    const count = string.length;
    if (count === 0) {
      throw new Error('String must be at least 1 character long');
    }
    if (count > 10) {
      throw new Error('String must not be longer than 10 characters');
    }
    return count;
  }

  function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
  // Test case
  const string = 'hello';
  const reversedString = reverseString(string);
  console.log(reversedString); // Output: 'olleh'

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  