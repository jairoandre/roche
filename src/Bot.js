import { doPrint } from './Codingame';

export default class Bot {
  constructor(inputs, availables, carriedByMe, cloud) {
    this.inputs = inputs;
    this.availables = availables;
    this.carriedByMe = carriedByMe;
    this.cloud = cloud;
    this.target = inputs[0];
    this.eta = +inputs[1];
    this.score = +inputs[2];
    this.storageA = +inputs[3];
    this.storageB = +inputs[4];
    this.storageC = +inputs[5];
    this.storageD = +inputs[6];
    this.storageE = +inputs[7];
    this.expertiseA = +inputs[8];
    this.expertiseB = +inputs[9];
    this.expertiseC = +inputs[10];
    this.expertiseD = +inputs[11];
    this.expertiseE = +inputs[12];
    this.avgExpertise =
      (this.expertiseA +
        this.expertiseB +
        this.expertiseC +
        this.expertiseD +
        this.expertiseE) /
      5;
    this.realA = this.storageA + this.expertiseA;
    this.realB = this.storageB + this.expertiseB;
    this.realC = this.storageC + this.expertiseC;
    this.realD = this.storageD + this.expertiseD;
    this.realE = this.storageE + this.expertiseE;
    this.openSlots =
      10 -
      (this.storageA +
        this.storageB +
        this.storageC +
        this.storageD +
        this.storageE);
  }
  clone() {
    const clonedSamples = this.carriedByMe.map(s => s.clone());
    const clonedCloud = this.cloud.map(s => s.clone());
    return new Bot(
      this.inputs,
      this.availables.clone(),
      clonedSamples,
      clonedCloud
    );
  }
  rate(sample) {
    const deltaA = this.realA - sample.costA;
    const deltaB = this.realB - sample.costB;
    const deltaC = this.realC - sample.costC;
    const deltaD = this.realD - sample.costD;
    const deltaE = this.realE - sample.costE;
    return (deltaA + deltaB + deltaC + deltaD + deltaE) * sample.health;
  }
  lessExpensive(samples) {
    let bestSample;
    let bestRate;
    samples.forEach(sample => {
      const currRate = this.rate(sample);
      if (!bestSample || currRate > bestRate) {
        bestSample = sample;
        bestRate = currRate;
      }
    });
    return bestSample;
  }
  samplePrint(sample, availables) {
    if (sample.costA > this.realA && availables.availableA > 0) {
      doPrint('CONNECT A');
    } else if (sample.costB > this.realB && availables.availableB > 0) {
      doPrint('CONNECT B');
    } else if (sample.costC > this.realC && availables.availableC > 0) {
      doPrint('CONNECT C');
    } else if (sample.costD > this.realD && availables.availableD > 0) {
      doPrint('CONNECT D');
    } else if (availables.availableE > 0) {
      doPrint('CONNECT E');
    } else {
      doPrint('WAIT');
    }
  }
  canBeProduced(sample) {
    if (sample) {
      const aComponent = sample.costA <= this.realA;
      const bComponent = sample.costB <= this.realB;
      const cComponent = sample.costC <= this.realC;
      const dComponent = sample.costD <= this.realD;
      const eComponent = sample.costE <= this.realE;
      return aComponent && bComponent && cComponent && dComponent && eComponent;
    }
    return false;
  }
  nextState(move) {
    const clone = this.clone();
    if (move.type === 'WAIT') {
      clone.eta = Math.max(0, clone.eta - 1);
    } else if (move.type === 'CONNECT') {
    }
    return clone;
  }
}
