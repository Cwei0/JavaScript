class Car {
  constructor(name, color, topSpeed) {
    // properties
    this.name = name;
    this.color = color;
    this.topSpeed = topSpeed;
    this.currentSpeed = 0;
  }

  getCurrentspeed() {
    return this.currentSpeed;
  }

  zeroToSixty() {
    // return new Promise((resolve, reject) => {
    setTimeout(() => {
      this.currentSpeed = 60;
      console.log("PHEW! that took so fast");
      console.log(this.currentSpeed);
    }, 2900);
    // });
  }
  drive(speed) {
    this.currentSpeed += speed;
    console.log(`driving at ${this.currentSpeed}mph`);
  }

  brake() {
    this.currentSpeed -= 10;
    console.log("speed is reduced");
  }

  stop() {
    this.currentSpeed = 0;
    console.log("the car has stopped");
  }
}

const ferrari = new Car("ferrari", "red", 250);
// console.log(ferrari)

const porshe = new Car("Porshe", "yellow", 250);
// [1, 2, 3, 4, 5].forEach(_ => {
//     porshe.drive()
// });
// porshe.drive(40)
// porshe.drive(80)
// console.log(porshe.currentSpeed)

//Methods exist inside of classes
const numbers = [11, 2, 4];
numbers.push(6);
console.log(numbers);

//Adding more methods to the array data type

Array.prototype.myPush = function (item) {
  this[this.length] = item;
  return this;
};
const fruits = ["🍌", "🍏", "🍇", "🍊", "🍐", "🍊"];
console.log(fruits.myPush("🥝"));



//Bank details class
class BankDetails {
  constructor(name, type, balance) {
    this.balance = balance;
    this.name = name;
    this.account = type;
  }
  deposit(money) {
    this.balance += money;
    console.log({balance : this.balance})
    // console.log('deposited', `$${this.balance}`)
  }
  invest(money, percent) {
    setTimeout(() => {
      this.balance += (percent*money) + money;
      console.log({balance: this.balance});
    }, 10000);
  }

  withdrawal(money) {
    //guard clause
    if (this.balance - money <= 0) {
        console.log("error, insufficient balance")
        return
    }
    this.balance -= money;
    console.log({balance: this.balance})
  }

  fraud() {
    this.balance = 0;
    console.log("them don scam me ooo 😭😢⚰️🪦")
  }
}

const Fidelity = new BankDetails("Bott", "Current", 20000);

const depositButton = document.getElementById('deposit');
const withdrawButton = document.getElementById('withdraw');
const amountInput = document.getElementById('money');
const balanceDIV = document.getElementById('balance')


depositButton.onclick = () => {
    const amount = Number(amountInput.value)
     Fidelity.deposit(amount)
     balanceDIV.innerText = `Balance: $${Fidelity.balance}`
}
withdrawButton.onclick = () => {

    const amount = Number(amountInput.value)
    Fidelity.withdrawal(amount)
    balanceDIV.innerText  = `Balance: $${Fidelity.balance}`
}
