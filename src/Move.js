export default class Move {
  constructor(type, param) {
    this.type = type;
    this.param = param;
  }
  toString() {
    return this.param ? `${this.type} ${this.param}` : this.type;
  }
}
