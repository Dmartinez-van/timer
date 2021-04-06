const args = process.argv.slice(2);
const validArgs = [];

for (const ele of args) {
  if (Number(ele) > 0 && Number.isInteger(Math.floor(Number(ele)))) {
    validArgs.push(Number(ele));
  }
}

for (const ele of validArgs) {
  console.log(ele);
  setTimeout(() => process.stdout.write('\x07'), ele * 1000);
}