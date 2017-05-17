export function read() {
  return readline();
}

export function readSplit() {
  return readline().split(' ');
}

export function debug(obj) {
  printErr(obj);
}

export function debugObj(obj) {
  printErr('===================');
  Object.keys(obj).forEach((key) => {
    printErr(`${key}: ${obj[key]}`);
  });
  printErr('===================');
}

export function doPrint(msg) {
  print(msg);
}
