// We write the Modash library in this file in the Unit Testing chapter

function truncate(string, length) {
  if (string.length > length) {
    return `${string.slice(0, length)}...`
  }
  return string;
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function camelCase(string) {
  return string.split(/[\s|\-|_]+/).map((val, idx) =>
    idx === 0 ? val.toLowerCase() : capitalize(val)
  ).join('');
}

const Modash = {
  truncate,
  capitalize,
  camelCase
}

export default Modash;
