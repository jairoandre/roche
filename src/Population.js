import Genome from './Genome';

export default class Population {
  constructor(bots, size, genomeSize) {
    this.bots = bots;
    this.size = size;
    this.genomeSize = genomeSize;
    this.population = [];
    this.fitness = [];
  }
  init() {
    for (let i = 0; i < this.size; i += 1) {
      this.population.push(new Genome(this.genomeSize));
    }
  }
}
