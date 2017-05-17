import Move from './Move';

export default class Gene {
  constructor() {
    this.a = Math.random();
    this.b = Math.random();
  }
  toMove(bot) {
    if (bot.eta > 0) {
      return new Move('WAIT');
    }
    if (bot.target === 'SAMPLES') {
      if (this.a > 0.5 && bot.samples.length < 3) {
        // Pick sample rank by the 'b' gene component
        if (this.b < 0.33) {
          return new Move('CONNECT', 1);
        } else if (this.b < 0.66) {
          return new Move('CONNECT', 2);
        }
        return new Move('CONNECT', 3);
      }
      return this.goTo(['DIAGNOSIS', 'MOLECULES', 'LABORATORY']);
    } else if (bot.target === 'DIAGNOSIS') {
      if (this.a < 0.33 && bot.samples.length > 0) {
        // In this case, the b component is used to
        // pick a sample from the samples array.
        const sample = this.pickSample(bot.samples);
        return new Move('CONNECT', sample.id);
      } else if (this.a < 0.66 && bot.cloud.length > 0) {
        const sample = this.pickSample(bot.cloud);
        return new Move('CONNECT', sample.id);
      }
      return this.goTo(['SAMPLES', 'MOLECULES', 'LABORATORY']);
    } else if (bot.target === 'MOLECULES') {
      if (this.a < 0.5 && bot.openSlots < 10) {
        if (this.b < 0.2 && bot.availables.availableA > 0) {
          return new Move('CONNECT', 'A');
        } else if (this.b < 0.4 && bot.availables.availableB > 0) {
          return new Move('CONNECT', 'B');
        } else if (this.b < 0.6 && bot.availables.availableC > 0) {
          return new Move('CONNECT', 'C');
        } else if (this.b < 0.8 && bot.availables.availableD > 0) {
          return new Move('CONNECT', 'C');
        } else if (bot.availables.availableE > 0) {
          return new Move('CONNECT', 'E');
        }
        return this.goTo(['SAMPLES', 'DIAGNOSIS', 'LABORATORY']);
      }
      return this.goTo(['SAMPLES', 'DIAGNOSIS', 'LABORATORY']);
    }
    // LABORATORY
    if (this.a < 0.5 && bot.readyToBeProduced.length > 0) {
      const sample = this.pickSample(bot.readyToBeProduced);
      return new Move('CONNECT', sample.id);
    }
    return this.goTo(['SAMPLES', 'DIAGNOSIS', 'MOLECULES']);
  }
  pickSample(samples) {
    const step = 1 / samples.length;
    let idx = -1;
    for (let i = 0; i <= this.b; i += step) {
      idx += 1;
    }
    const sample = samples[idx];
    return sample;
  }
  goTo(locations) {
    if (this.b < 0.25) {
      return new Move('WAIT');
    } else if (this.b < 0.50) {
      return new Move('GOTO', locations[0]);
    } else if (this.b < 0.75) {
      return new Move('GOTO', locations[1]);
    }
    return new Move('GOTO', locations[2]);
  }
}
