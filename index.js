function produceDrivingRange(blockRange) {
  return function(start, end) {
    let totalDistance = Math.abs(parseInt(end) - parseInt(start));
    let remainder = blockRange - totalDistance;

    if (remainder > 0) {
      return `within range by ${remainder}`
    } else { 
      return `${Math.abs(remainder)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(amount) {
    return amount * tip
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
