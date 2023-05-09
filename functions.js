function stringLength(str) {
  if (str.length === 0) {
    throw new Error('String must be at least 1 character long');
  } else if (str.length > 10) {
    throw new Error('String must not be longer than 10 characters');
  }
  return str.length;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  stringLength,
  capitalize,
};
