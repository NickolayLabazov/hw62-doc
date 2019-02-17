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
