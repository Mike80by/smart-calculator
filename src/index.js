class SmartCalculator {

  constructor(initialValue) {
    this.stack = [initialValue];
    this.calculate = function() {
      let expression = this.stack.reduce(function(value, i) {
        return value + i.operation + i.operand;
      });
      return eval(expression);
    } 
  }

  add(number) {
    this.stack.push({
      operation: "+",
      operand: number
    });
    return this;
  }
  
  subtract(number) {
    this.stack.push({
      operation: "-",
      operand: number
    });
    return this;
  }

  multiply(number) {
    this.stack.push({
      operation: "*",
      operand: number
    });
    return this;
  }

  devide(number) {
    this.stack.push({
      operation: "/",
      operand: number
    });
    return this;
  }

  pow(number) {
    this.stack.push({
      operation: "**",
      operand: number
    });
    return this;
  }

  toString() {
      return this.calculate();
    }

}

module.exports = SmartCalculator;