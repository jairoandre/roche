import Gene from './Gene';

export default class Genome {
  constructor(size) {
    this.genes = [];
    for (let i = 0; i < size; i += 1) {
      this.genes.push(new Gene());
    }
  }
}
