// Task1
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.legs = 0;
    this.status = status;
    this.species = "shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super();
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "cat";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master = "") {
    super();
    this.master = master;
    this.name = name;
    this.age = age;
    this.status = status;
    this.legs = 4;
    this.species = "dog";
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

// const shark = new Shark("shark", 10, "active");
// console.log(shark);

// Task 2
class SortedList {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  add(el) {
    if (this.list.length === 0 || el > this.list[this.list.length - 1])
      this.list.push(el);
    else if (el < this.list[0]) this.list.unshift(el);
    else {
      this.list.push(el);
      this.list.sort();
    }
    this.length++;
  }

  get(i) {
    return this.list[i];
  }
}

// Task 3

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getInfo() {
    return `${this.name} age is ${this.age}`;
  }
}
const a = new Person("johns", 3);

console.log(a.getInfo());

// Task 4*
class HallOfFame {
  constructor(size = 5, players = []) {
    this.size = size;
    this.players = players;
    this.sort();
    this.players = this.players.slice(0, size);
  }

  add(el) {
    if (this.players.length === 0 && el.length !== 0 && this.size > 0) {
      this.players.push(el);
      return this;
    }

    if (
      !el?.length ||
      el.length === 0 ||
      this.players[this.players.length - 1][1] > el[1]
    )
      return this;
    const pl = this.players.find((pl) => pl[0] === el[0]);
    console.log("pl: ", pl);

    if (!!pl)
      if (pl[1] < el[1]) {
        this.players.splice(this.players.indexOf(pl), 1, el);
        this.sort();
        return this;
      }
    this.players.push(el);
    this.sort();
    this.players = this.players.slice(0, this.size);
    return this;
  }

  sort() {
    this.players.sort((a, b) => {
      if (a[1] === b[1]) return a[0] > b[0] ? 1 : -1;
      else return a[1] < b[1] ? 1 : -1;
    });
  }

  list() {
    let list = this.players.map((el) => `${el[0]}: ${el[1]}`);
    if (list.length !== this.size)
      list.push(...Array(this.size - list.length).fill(""));
    return list;
  }
}

// Task 5 * Football Task
//
class Football {
  constructor() {
    this.teamA = this.fillTeam(11);
    this.teamB = this.fillTeam(11);
  }

  fillTeam(num) {
    let res = [];
    for (let i = 1; i <= num; i++)
      res.push({ number: i, yellowCard: 0, isPresent: true });
    return res;
  }

  play(cardArray) {
    let teamALoosed = false;
    let teamBLoosed = false;
    cardArray.forEach((card) => {
      const team = card[0];
      const cardColor = card[card.length - 1];
      const number = card.substr(1, card.length - 2);
      const player =
        team === "A"
          ? this.teamA.find((p) => p.number == number)
          : this.teamB.find((p) => p.number == number);
      if (cardColor === "R" || player.yellowCard === 1)
        player.isPresent = false;
      if (cardColor === "Y" && player.yellowCard === 0) player.yellowCard = 1;

      if (
        this.teamA.reduce((acc, item) => (item.isPresent ? acc + 1 : acc), 0) <
        7
      ) {
        teamALoosed = true;
        return;
      }
      if (
        this.teamB.reduce((acc, item) => (item.isPresent ? acc + 1 : acc), 0) <
        7
      ) {
        teamBLoosed = true;
        return;
      }
    });

    if (teamALoosed) return "Team A has loosed the game";
    if (teamBLoosed) return "Team B has loosed the game";
    return [
      this.teamA.reduce((acc, item) => (item.isPresent ? acc + 1 : acc), 0),
      this.teamB.reduce((acc, item) => (item.isPresent ? acc + 1 : acc), 0),
    ];
  }
}

// const f = new Football();
// console.log(f.play(["A4R", "A6Y", "B8R", "A10R", "A3R"]));
// console.log(f.play(["A5R", "A6R"]));
