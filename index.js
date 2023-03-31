// Write your code here
//Breakfast class
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

const breakfast = new Breakfast("eggs", "tea");
console.log(breakfast);

//Lunch class
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

const lunch = new Lunch("chicken salad", "pasta", "mojito");
console.log(lunch);

//dinner class
class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}

const dinner = new Dinner("egg salad", "mushroom soup", "lasagne", "ice-cream");
console.log(dinner);
