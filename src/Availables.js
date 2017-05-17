export default class Availables {
  constructor(inputs) {
    this.inputs = inputs;
    this.availableA = +inputs[0];
    this.availableB = +inputs[1];
    this.availableC = +inputs[2];
    this.availableD = +inputs[3];
    this.availableE = +inputs[4];
  }
  clone() {
    return new Availables(this.inputs);
  }
}
