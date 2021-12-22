const main = document.querySelector(".main");
const time = document.querySelector(".time");
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

  this.render = function () {
    let check = time.classList.contains("full");
    if (!check) {
      Short.prototype = new Clock();
      let short = new Short();
      time.innerText = short.getTimeShort();
    } else {
      Full.prototype = new Clock();
      let full = new Full();
      time.innerText = full.getTimeFull();
    }
  };
};

function Full() {
  this.getTimeFull = function () {
    if (this.hour < 10) this.hour = "0" + this.hour;
    if (this.minutes < 10) this.minutes = "0" + this.minutes;
    if (this.second < 10) this.second = "0" + this.second;
    return `${this.hour}:${this.minutes}:${this.second}`;
  };
}

function Short() {
  this.getTimeShort = function () {
    if (this.hour < 10) this.hour = "0" + this.hour;
    if (this.minutes < 10) this.minutes = "0" + this.minutes;
    return `${this.hour}:${this.minutes}`;
  };
}

let setTime = new Clock();
setInterval(() => {
  setTime.render();
}, interval);