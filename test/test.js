import Character from '../src/function';

test('Bowman', () => {
  const expected = {
    attack: 25, defense: 25, health: 100, level: 1, name: 'Name', type: 'Bowman',
  };
  const received = new Character('Name', 'Bowman');
  expect(received).toEqual(received);
});

test('Swordsman', () => {
  const expected = {
    attack: 40, defense: 10, health: 100, level: 1, name: 'Name', type: 'Swordsman',
  };
  const received = new Character('Name', 'Swordsman');
  expect(received).toEqual(received);
});

test('Magician', () => {
  const expected = {
    attack: 10, defense: 40, health: 100, level: 1, name: 'Name', type: 'Magician',
  };
  const received = new Character('Name', 'Magician');
  expect(received).toEqual(received);
});

test('Undead', () => {
  const expected = {
    attack: 25, defense: 25, health: 100, level: 1, name: 'Name', type: 'Undead',
  };
  const received = new Character('Name', 'Undead');
  expect(received).toEqual(received);
});

test('Zombie', () => {
  const expected = {
    attack: 40, defense: 10, health: 100, level: 1, name: 'Name', type: 'Zombie',
  };
  const received = new Character('Name', 'Zombie');
  expect(received).toEqual(received);
});

test('Daemon', () => {
  const expected = {
    attack: 40, defense: 1 - 0, health: 100, level: 1, name: 'Name', type: 'Daemon',
  };
  const received = new Character('Name', 'Daemon');
  expect(received).toEqual(received);
});

test('Запрещенный тип', () => {
  expect(() => {
	 new Character('Name', 'Посторонний персонаж');
  }).toThrow();
});

test('Имя < 2', () => {
  expect(() => {
	 new Character('N', 'Daemon');
  }).toThrow();
});

test('Имя > 10', () => {
  expect(() => {
	 new Character('12345678910', 'Daemon');
  }).toThrow();
});
