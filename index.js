// Object literals add to cart

const someItems = {
  theBag: [],

  addToBag: function (item) {
    this.theBag.push(item);
  },

  getCartItems: function () {
    console.log("The bag:", this.theBag);
  },
};

someItems.addToBag({ weapon: "AK-47", color: "Black", ammo: 100 });

someItems.getCartItems();

// setters and getters new name

const theUser = {
  firstName: "Yusuf",
  nickName: "Ibrahim",
  setFirstName: function (newFirstName) {
    //
    this.firstName = newFirstName;
  },
};
theUser.setFirstName("Yusuf");

console.log(theUser.firstName);

// new name

const TheCar = {
  _carName: "Sports Car",

  // The 'setter'
  set carName(newCarName) {
    this._carName = newCarName;
  },

  // The 'getter'
  get carName() {
    return this._carName;
  },
};

// Use the 'firstName' setter
TheCar.carName = "Lamborghini";
// Use the 'firstName' getter
console.log(TheCar.carName);
