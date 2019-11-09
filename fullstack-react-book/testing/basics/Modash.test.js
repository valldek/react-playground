// We write the tests for the Modash library in
// this file in the Unit Testing chapter
import Modash from './Modash';

const string = 'there was one catch, and that catch was CATCH-22';

const actual = Modash.truncate(string, 19);

const expected = 'there was one catch...';

if (actual !== expected) {
  console.log(`[FAIL] Expected \`truncate()\` to return '${expected}', got '${actual}'`);
} else {
  console.log('[PASS] `truncate()`.');
}

// # 2
function assertEqual(description, actual, expected) {
  if (actual === expected) {
    console.log(`[PASS] ${description}`);
  } else {
    console.log(`[FAIL] ${description}`);
    console.log(`\tactual: '${actual}'`);
    console.log(`\texpected: '${expected}'`);
  }
}

let str;
let exp;
let act;

str = 'there was one catch, and that catch was CATCH-22';
act = Modash.truncate(string, 19);
exp = 'there was one catch...';

assertEqual('`truncate()`: truncates a string', act, exp);

act = Modash.truncate(string);
exp = str;

assertEqual('`truncate()`: no-ops if <= length', act, exp);

act = Modash.capitalize(str);
exp = 'There was one catch, and that catch was catch-22';

assertEqual('`capitalize()`: capitalizes the string', act, exp);

str = 'customer responded at';
act = Modash.camelCase(str);
exp = 'customerRespondedAt';

assertEqual('`camelCase()`: string with spaces', act, exp);

str = 'customer_responded_at';
act = Modash.camelCase(str);
exp = 'customerRespondedAt';

assertEqual('`camelCase()`: string with underscores', act, exp);

// # 3

describe('My test Suite', () => {
  it('`true` should be `true`', () => {
    expect(true).toBe(true);
  });

  it('`false` should be `false`', () => {
    expect(false).toBe(false);
  });
});

// # 4, 5, 6

describe ('Modash', () => {
  describe ('`truncate()`', () => {
    const string = 'there was one catch, and that was CATCH-22';
    it ('truncates a string', () => {
      expect(
        Modash.truncate(string, 19)
      ).toEqual('there was one catch...');
    });

    it (' no-ops if <= length', () => {
      expect(
        Modash.truncate(string)
      ).toEqual(string);
    });
  });

  describe('capitalize()', () => {
    it ('capitalizes first letter, lowercases rest', () => {
      const string = 'there was one catch, and that was CATCH-22';
      expect(Modash.capitalize(string)).toEqual('There was one catch, and that was catch-22');
    });
  });

  describe('camelCase()', () => {
    it('camelizes string with spaces', () => {
      const string = 'customer responded at';
      expect(
        Modash.camelCase(string)
      ).toEqual('customerRespondedAt');
    });

    it('camelizes string with underscores', () => {
      const string = 'customer_responded_at';
      expect(
        Modash.camelCase(string)
      ).toEqual('customerRespondedAt');
    });
  });
});
