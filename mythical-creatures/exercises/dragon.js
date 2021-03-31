class Dragon {
  constructor(dragonName, dragonJockey) {
    this.name = dragonName;
    this.rider = dragonJockey;
    this.hungry = true;
    this.meals = 0;
  }
  greet() {
    return `Hi, ${this.rider}!`;
  }
  eat() {
    this.meals++;
    if (this.meals >= 3) {
      this.hungry = false;
    } else {
      this.hungry = true;
    }
  }
};

module.exports = Dragon;
