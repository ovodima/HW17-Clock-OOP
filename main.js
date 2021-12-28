const main = document.querySelector(".main");
const time1 = document.querySelector(".time-1");
const time2 = document.querySelector(".time-2");
const time3 = document.querySelector(".time-3");
const interval = 250;

let Clock = function () {
  this.clock = new Date();
  this.hour = this.clock.getHours();
  this.minutes = this.clock.getMinutes();
  this.second = this.clock.getSeconds();

  main.addEventListener("click", (e) => {
    let target = e.target;
    target.classList.toggle("full");
  });

  this.getTime = function() {
    let check = time1.classList.contains("full");
    let result
    if (!check) {
      result = this.clock.toLocaleTimeString();
      return result;
    } else {
      result = this.clock.toLocaleString();
      return result;
    }
  }

  this.render = function () {
    time1.innerText = this.getTime()
  };
};

function Full() {
  this.getTime = function () {
    if (this.hour < 10) this.hour = "0" + this.hour;
    if (this.minutes < 10) this.minutes = "0" + this.minutes;
    if (this.second < 10) this.second = "0" + this.second;
    let check = time2.classList.contains("full");
    let result
    if(check) {
      result = `${this.hour}:${this.minutes}:${this.second}`
      return result
    } else {
      return result = this.clock.toTimeString()
    }
  };

  this.render = function() {
    time2.innerText = this.getTime()
  }
}

function Short() {
  this.getTime = function () {
    if (this.hour < 10) this.hour = "0" + this.hour;
    if (this.minutes < 10) this.minutes = "0" + this.minutes;
    if (this.second < 10) this.second = "0" + this.second;
    let check = time3.classList.contains("full");
    let result

    if(check) {
      result = `${this.hour}:${this.minutes}`
      return result
    } else {
      return result = this.clock.toLocaleString()
    }
  };

  this.render = function() {
    time3.innerText = this.getTime()
  }
}

console.log(new Clock())

setInterval(() => {
  Short.prototype = new Clock()
  Full.prototype = new Clock()
  let clock = new Clock()
  let full = new Full();
  let short = new Short()

  short.render()
  clock.render()
  full.render()
}, interval);