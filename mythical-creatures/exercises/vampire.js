class Vampire {
  constructor(vampName, vampPet) {
    this.name = vampName;
    this.thirsty = true;
    this.ouncesDrank = 0;
    if (vampPet === undefined) {
      this.pet = 'bat';
    } else {
      this.pet = vampPet;
    }
  }
  drink() {
    this.thirsty = false;
    this.ouncesDrank += 10;
  }
}




module.exports = Vampire;
