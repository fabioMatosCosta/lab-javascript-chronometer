class Chronometer {
  constructor() {
    this.currentTime = 1256;
    this.increment = this.increment.bind(this);
    this.intervalId = 0;

  }
  startClick() {
    this.intervalId= setInterval(this.increment, 1000)
  }

  increment() {
    this.currentTime++;
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60);
    return minutes;
  }
  getSeconds() {
    let seconds = this.currentTime % 60;
    return seconds;
  }

  twoDigitsNumber(time) {
    let str = time.toString();
    if (str.length < 2){
      return str = "0" + str;
    } else {
      return str;
    }
  }

  resetClick() {
    this.currentTime = 0;
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  
  // splitClick() {}
}

