class Hobbit {
  constructor(hobbitName) {
    this.name = hobbitName.name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
  }
  celebrateBirthday() {
    this.age++;
    if (this.age < 33) {
      this.adult = false;
    } else if (this.age > 32 && this.age < 101){
      this.adult = true;
    } else {
      this.old = true;
    }
  }
  getRing() {
    if (this.name === 'Frodo') {
      this.hasRing = true;
      return `Here is the ring!`
    } else {
      this.hasRing = false;
      return `You can't have it!`
    }
  }
}



module.exports = Hobbit;
