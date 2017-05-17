import Project from './src/Project';
import Bot from './src/Bot';
import Availables from './src/Availables';
import Sample from './src/Sample';
import { read, readSplit, debugObj } from './src/Codingame';
import State from './src/State';

const projectCount = +read();
const sampleStates = {};

for (let i = 0; i < projectCount; i += 1) {
  const project = new Project(readSplit());
  debugObj(project);
}

// game loop
for (;;) {
  const bots = [];
  const botsInputs = [];
  const samples = [];
  for (let i = 0; i < 2; i += 1) {
    botsInputs.push(readSplit());
  }
  const availables = new Availables(readSplit());
  const sampleCount = +read();
  for (let i = 0; i < sampleCount; i += 1) {
    const sample = new Sample(readSplit());
    samples.push(sample);
    if (!sampleStates[sample.id]) {
      sampleStates[sample.id] = 'undiagnosed';
    }
  }
  const cloud = samples.filter(s => s.carriedBy === -1);
  for (let i = 0; i < 2; i += 1) {
    const carriedByThisBot = samples.filter(s => s.carriedBy === i);
    const bot = new Bot(botsInputs[i], availables, carriedByThisBot, cloud);
    bots.push(bot);
  }
  const state = new State(bots, samples, sampleStates, availables);
  state.print();
}
