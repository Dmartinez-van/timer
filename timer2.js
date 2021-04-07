// Some pair programming with Luke Penner

const readline = require('readline');
const stdin = process.stdin;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.on('line', (input) => {
//   console.log(`Received: ${input}`);
// });

readline.emitKeypressEvents(process.stdin);
stdin.on('keypress', (key = ">> ", data) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  if (Number(key) >= 1 && Number(key) <= 9) {
    console.log(`\nSetting timer for ${key} seconds...`);
    setTimeout(() => process.stdout.write('\x07'), key * 1000);
  }
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
  }
});