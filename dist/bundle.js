/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.read = read;
exports.readSplit = readSplit;
exports.debug = debug;
exports.debugObj = debugObj;
exports.doPrint = doPrint;
function read() {
  return readline();
}

function readSplit() {
  return readline().split(' ');
}

function debug(obj) {
  printErr(obj);
}

function debugObj(obj) {
  printErr('===================');
  Object.keys(obj).forEach(function (key) {
    printErr(key + ': ' + obj[key]);
  });
  printErr('===================');
}

function doPrint(msg) {
  print(msg);
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Availables = function () {
  function Availables(inputs) {
    _classCallCheck(this, Availables);

    this.inputs = inputs;
    this.availableA = +inputs[0];
    this.availableB = +inputs[1];
    this.availableC = +inputs[2];
    this.availableD = +inputs[3];
    this.availableE = +inputs[4];
  }

  _createClass(Availables, [{
    key: "clone",
    value: function clone() {
      return new Availables(this.inputs);
    }
  }]);

  return Availables;
}();

exports.default = Availables;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Codingame = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bot = function () {
  function Bot(inputs, availables, carriedByMe, cloud) {
    _classCallCheck(this, Bot);

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
    this.avgExpertise = (this.expertiseA + this.expertiseB + this.expertiseC + this.expertiseD + this.expertiseE) / 5;
    this.realA = this.storageA + this.expertiseA;
    this.realB = this.storageB + this.expertiseB;
    this.realC = this.storageC + this.expertiseC;
    this.realD = this.storageD + this.expertiseD;
    this.realE = this.storageE + this.expertiseE;
    this.openSlots = 10 - (this.storageA + this.storageB + this.storageC + this.storageD + this.storageE);
  }

  _createClass(Bot, [{
    key: 'clone',
    value: function clone() {
      var clonedSamples = this.carriedByMe.map(function (s) {
        return s.clone();
      });
      var clonedCloud = this.cloud.map(function (s) {
        return s.clone();
      });
      return new Bot(this.inputs, this.availables.clone(), clonedSamples, clonedCloud);
    }
  }, {
    key: 'rate',
    value: function rate(sample) {
      var deltaA = this.realA - sample.costA;
      var deltaB = this.realB - sample.costB;
      var deltaC = this.realC - sample.costC;
      var deltaD = this.realD - sample.costD;
      var deltaE = this.realE - sample.costE;
      return (deltaA + deltaB + deltaC + deltaD + deltaE) * sample.health;
    }
  }, {
    key: 'lessExpensive',
    value: function lessExpensive(samples) {
      var _this = this;

      var bestSample = void 0;
      var bestRate = void 0;
      samples.forEach(function (sample) {
        var currRate = _this.rate(sample);
        if (!bestSample || currRate > bestRate) {
          bestSample = sample;
          bestRate = currRate;
        }
      });
      return bestSample;
    }
  }, {
    key: 'samplePrint',
    value: function samplePrint(sample, availables) {
      if (sample.costA > this.realA && availables.availableA > 0) {
        (0, _Codingame.doPrint)('CONNECT A');
      } else if (sample.costB > this.realB && availables.availableB > 0) {
        (0, _Codingame.doPrint)('CONNECT B');
      } else if (sample.costC > this.realC && availables.availableC > 0) {
        (0, _Codingame.doPrint)('CONNECT C');
      } else if (sample.costD > this.realD && availables.availableD > 0) {
        (0, _Codingame.doPrint)('CONNECT D');
      } else if (availables.availableE > 0) {
        (0, _Codingame.doPrint)('CONNECT E');
      } else {
        (0, _Codingame.doPrint)('WAIT');
      }
    }
  }, {
    key: 'canBeProduced',
    value: function canBeProduced(sample) {
      if (sample) {
        var aComponent = sample.costA <= this.realA;
        var bComponent = sample.costB <= this.realB;
        var cComponent = sample.costC <= this.realC;
        var dComponent = sample.costD <= this.realD;
        var eComponent = sample.costE <= this.realE;
        return aComponent && bComponent && cComponent && dComponent && eComponent;
      }
      return false;
    }
  }, {
    key: 'nextState',
    value: function nextState(move) {
      var clone = this.clone();
      if (move.type === 'WAIT') {
        clone.eta = Math.max(0, clone.eta - 1);
      } else if (move.type === 'CONNECT') {}
      return clone;
    }
  }]);

  return Bot;
}();

exports.default = Bot;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Project = function Project(inputs) {
  _classCallCheck(this, Project);

  this.a = +inputs[0];
  this.b = +inputs[1];
  this.c = +inputs[2];
  this.d = +inputs[3];
  this.e = +inputs[4];
};

exports.default = Project;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sample = function () {
  function Sample(inputs) {
    _classCallCheck(this, Sample);

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

  _createClass(Sample, [{
    key: "clone",
    value: function clone() {
      return new Sample(this.inputs);
    }
  }]);

  return Sample;
}();

exports.default = Sample;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Codingame = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = function () {
  function State(bots, samples, sampleStates, availables) {
    _classCallCheck(this, State);

    this.bots = bots;
    this.samples = samples;
    this.sampleStates = sampleStates;
    this.availables = availables;
  }

  _createClass(State, [{
    key: 'isDiagnosed',
    value: function isDiagnosed(sample) {
      return this.sampleStates[sample.id] === 'diagnosed';
    }
  }, {
    key: 'print',
    value: function print() {
      var _this = this;

      var myBot = this.bots[0];
      var samplesCarriedByMe = this.samples.filter(function (s) {
        return s.carriedBy === 0;
      });
      var diagnosedSamples = samplesCarriedByMe.filter(this.isDiagnosed.bind(this));
      // I check if my bot is carrying any sample, because, if not its better to
      // get one.
      if (samplesCarriedByMe.length === 0 || samplesCarriedByMe.length < 3 && diagnosedSamples.length === 0) {
        if (myBot.target === 'SAMPLES' && myBot.eta === 0) {
          if (myBot.avgExpertise >= 2) {
            (0, _Codingame.doPrint)('CONNECT 3');
          } else if (myBot.avgExpertise >= 1) {
            (0, _Codingame.doPrint)('CONNECT 2');
          } else {
            (0, _Codingame.doPrint)('CONNECT 1');
          }
        } else {
          (0, _Codingame.doPrint)('GOTO SAMPLES');
        }
      } else {
        if (samplesCarriedByMe.length === diagnosedSamples.length) {
          var samplesMol = samplesCarriedByMe.filter(function (s) {
            return !myBot.canBeProduced(s);
          });
          // If my bot is in the MOLECULES module and has open slots, get more molecules
          if (myBot.target === 'MOLECULES' && myBot.eta === 0 && myBot.openSlots > 0 && samplesMol.length > 0) {
            var lessExpensiveSample = myBot.lessExpensive(samplesMol);
            myBot.samplePrint(lessExpensiveSample, this.availables);
          } else {
            var canBeProducedSamples = samplesCarriedByMe.filter(function (sample) {
              return myBot.canBeProduced(sample);
            });
            if (canBeProducedSamples.length > 0) {
              if (myBot.target === 'LABORATORY' && myBot.eta === 0) {
                (0, _Codingame.doPrint)('CONNECT ' + canBeProducedSamples[0].id);
              } else {
                (0, _Codingame.doPrint)('GOTO LABORATORY');
              }
            } else if (myBot.target === 'MOLECULES' && myBot.eta === 0 && myBot.openSlots > 0) {
              var canBeProducedFilterFn = function canBeProducedFilterFn(sample) {
                return !myBot.canBeProduced(sample);
              };
              var _samplesMol = samplesCarriedByMe.filter(canBeProducedFilterFn);
              var _lessExpensiveSample = myBot.lessExpensive(_samplesMol);
              myBot.samplePrint(_lessExpensiveSample, this.availables);
            } else if (myBot.openSlots > 0) {
              (0, _Codingame.doPrint)('GOTO MOLECULES');
            } else {
              (0, _Codingame.doPrint)('GOTO SAMPLES');
            }
          }
        } else {
          if (myBot.target === 'DIAGNOSIS' && myBot.eta === 0) {
            var undiagnosedSamples = samplesCarriedByMe.filter(function (s) {
              return _this.sampleStates[s.id] === 'undiagnosed';
            });
            var undiagnosed = undiagnosedSamples[0];
            (0, _Codingame.doPrint)('CONNECT ' + undiagnosed.id);
            this.sampleStates[undiagnosed.id] = 'diagnosed';
          } else {
            (0, _Codingame.doPrint)('GOTO DIAGNOSIS');
          }
        }
      }
    }
  }]);

  return State;
}();

exports.default = State;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Project = __webpack_require__(3);

var _Project2 = _interopRequireDefault(_Project);

var _Bot = __webpack_require__(2);

var _Bot2 = _interopRequireDefault(_Bot);

var _Availables = __webpack_require__(1);

var _Availables2 = _interopRequireDefault(_Availables);

var _Sample = __webpack_require__(4);

var _Sample2 = _interopRequireDefault(_Sample);

var _Codingame = __webpack_require__(0);

var _State = __webpack_require__(5);

var _State2 = _interopRequireDefault(_State);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectCount = +(0, _Codingame.read)();
var sampleStates = {};

for (var i = 0; i < projectCount; i += 1) {
  var project = new _Project2.default((0, _Codingame.readSplit)());
  (0, _Codingame.debugObj)(project);
}

// game loop
for (;;) {
  var bots = [];
  var botsInputs = [];
  var samples = [];
  for (var _i = 0; _i < 2; _i += 1) {
    botsInputs.push((0, _Codingame.readSplit)());
  }
  var availables = new _Availables2.default((0, _Codingame.readSplit)());
  var sampleCount = +(0, _Codingame.read)();
  for (var _i2 = 0; _i2 < sampleCount; _i2 += 1) {
    var sample = new _Sample2.default((0, _Codingame.readSplit)());
    samples.push(sample);
    if (!sampleStates[sample.id]) {
      sampleStates[sample.id] = 'undiagnosed';
    }
  }
  var cloud = samples.filter(function (s) {
    return s.carriedBy === -1;
  });

  var _loop = function _loop(_i3) {
    var carriedByThisBot = samples.filter(function (s) {
      return s.carriedBy === _i3;
    });
    var bot = new _Bot2.default(botsInputs[_i3], availables, carriedByThisBot, cloud);
    bots.push(bot);
  };

  for (var _i3 = 0; _i3 < 2; _i3 += 1) {
    _loop(_i3);
  }
  var state = new _State2.default(bots, samples, sampleStates, availables);
  state.print();
}

/***/ })
/******/ ]);