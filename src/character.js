/**
 * Конструктор для создания героев компьютерной игры.
 * 
 * @param {string} name - Имя героя. Задается при создании объекта. Длинна имени от 2 до 10 символов.
 * @param {string} type - Тип героя. Задается при создании объекта. Может принимать одно из шести значений.
 * @param {string} health - Параметр устанавливается по умолчанию при создании объекта.
 * @param {string} level - Параметр устанавливается по умолчанию при создании объекта.
 * @param {string} attack - Параметр устанавливается в зависимости от типа объекта.
 * @param {string} defense - Параметр устанавливается в зависимости от типа объекта.
 * 
 * @throws {Недопустимая длинна имени} Длинна name больше 10 или меньше 2 символов.
 * @throws {Неверно указан тип} type не соответствует ни одному из шести разрешенных значений.
 *  
 */ 

export default function Character(name, type) {
  if (name.length < 2 || name.length > 10) {
    throw 'Недопустимая длинна имени';
  }

  if (type === 'Bowman') {
    this.attack = 25;
    this.defense = 25;
  } else if (type === 'Swordsman') {
    this.attack = 40;
    this.defense = 10;
  } else if (type === 'Magician') {
    this.attack = 10;
    this.defense = 40;
  } else if (type === 'Undead') {
    this.attack = 25;
    this.defense = 25;
  } else if (type === 'Zombie') {
    this.attack = 40;
    this.defense = 10;
  } else if (type === 'Daemon') {
    this.attack = 40;
    this.defense = 10;
  } else {
    throw 'Неверно указан тип';
  }

  this.health = 100;
  this.level = 1;
  this.name = name;
  this.type = type;


  return this;
}
