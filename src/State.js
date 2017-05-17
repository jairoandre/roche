import { doPrint, debugObj } from './Codingame';

export default class State {
  constructor(bots, samples, sampleStates, availables) {
    this.bots = bots;
    this.samples = samples;
    this.sampleStates = sampleStates;
    this.availables = availables;
  }
  isDiagnosed(sample) {
    return this.sampleStates[sample.id] === 'diagnosed';
  }
  print() {
    const myBot = this.bots[0];
    const samplesCarriedByMe = this.samples.filter(s => s.carriedBy === 0);
    const diagnosedSamples = samplesCarriedByMe.filter(
      this.isDiagnosed.bind(this)
    );
    // I check if my bot is carrying any sample, because, if not its better to
    // get one.
    if (
      samplesCarriedByMe.length === 0 ||
      (samplesCarriedByMe.length < 3 && diagnosedSamples.length === 0)
    ) {
      if (myBot.target === 'SAMPLES' && myBot.eta === 0) {
        if (myBot.avgExpertise >= 2) {
          doPrint('CONNECT 3');
        } else if (myBot.avgExpertise >= 1) {
          doPrint('CONNECT 2');
        } else {
          doPrint('CONNECT 1');
        }
      } else {
        doPrint('GOTO SAMPLES');
      }
    } else {
      if (samplesCarriedByMe.length === diagnosedSamples.length) {
        const samplesMol = samplesCarriedByMe.filter(
          s => !myBot.canBeProduced(s)
        );
        // If my bot is in the MOLECULES module and has open slots, get more molecules
        if (
          myBot.target === 'MOLECULES' &&
          myBot.eta === 0 &&
          myBot.openSlots > 0 &&
          samplesMol.length > 0
        ) {
          const lessExpensiveSample = myBot.lessExpensive(samplesMol);
          myBot.samplePrint(lessExpensiveSample, this.availables);
        } else {
          const canBeProducedSamples = samplesCarriedByMe.filter(sample =>
            myBot.canBeProduced(sample)
          );
          if (canBeProducedSamples.length > 0) {
            if (myBot.target === 'LABORATORY' && myBot.eta === 0) {
              doPrint(`CONNECT ${canBeProducedSamples[0].id}`);
            } else {
              doPrint('GOTO LABORATORY');
            }
          } else if (
            myBot.target === 'MOLECULES' &&
            myBot.eta === 0 &&
            myBot.openSlots > 0
          ) {
            const canBeProducedFilterFn = sample => {
              return !myBot.canBeProduced(sample);
            };
            const samplesMol = samplesCarriedByMe.filter(canBeProducedFilterFn);
            const lessExpensiveSample = myBot.lessExpensive(samplesMol);
            myBot.samplePrint(lessExpensiveSample, this.availables);
          } else if (myBot.openSlots > 0) {
            doPrint('GOTO MOLECULES');
          } else {
            doPrint('GOTO SAMPLES');
          }
        }
      } else {
        if (myBot.target === 'DIAGNOSIS' && myBot.eta === 0) {
          const undiagnosedSamples = samplesCarriedByMe.filter(
            s => this.sampleStates[s.id] === 'undiagnosed'
          );
          const undiagnosed = undiagnosedSamples[0];
          doPrint(`CONNECT ${undiagnosed.id}`);
          this.sampleStates[undiagnosed.id] = 'diagnosed';
        } else {
          doPrint('GOTO DIAGNOSIS');
        }
      }
    }
  }
}
