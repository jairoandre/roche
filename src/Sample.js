export default class Sample {
  constructor(inputs) {
    this.inputs = inputs;
    this.id = +inputs[0];
    this.carriedBy = +inputs[1];
    this.rank = +inputs[2];
    this.expertiseGain = +inputs[3];
    this.health = +inputs[4];
    this.costA = +inputs[5];
    this.costB = +inputs[6];
    this.costC = +inputs[7];
    this.costD = +inputs[8];
    this.costE = +inputs[9];
  }
  clone() {
    return new Sample(this.inputs);
  }
}
