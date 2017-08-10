const toInt = require('./index');

test('Convert "172.168.5.1" to equal 2896692481', () => {
  expect(toInt('172.168.5.1')).toBe(2896692481);
});


test('Convert "172 . 168.5.1" to equal 2896692481', () => {
  expect(toInt('172 . 168.5.1')).toBe(2896692481);
});


test('Throws on "1 72.168.5.1"', () => {
  expect(() => {
    toInt('1 72.168.5.1');
  })
  .toThrow();
});
