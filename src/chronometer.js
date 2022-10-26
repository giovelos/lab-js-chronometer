class Chronometer {
      constructor() {
      this.currentTime = 0
      this.intervalId = null
     }  
  };

  start(printTimeCallback); {
    return this.currentTime/60
  };  


  getMinutes(); {
    return this.currentTime/60
  };

  getSeconds(); {
    return this.currentTime%60
  }

  computeTwoDigitNumber(value); {
    return String("0" + value).slice(-2)
  }

  stop(); {
    clearInterval(this.intervalId);
  }

  reset(); {
    this.currentTime = 0;
  }

  split(); {
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    return(minutes, seconds);
  };