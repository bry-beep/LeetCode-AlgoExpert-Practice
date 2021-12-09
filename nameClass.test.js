const Name = require('./nameClass')

let me = new Name('bryanNa', 'vALDIVIA');
test('should return names back in proper casing', () => {
  expect(me.fullname()).toBe('Bryanna Valdivia');
})