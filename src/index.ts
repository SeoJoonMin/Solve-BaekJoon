import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('이름을 입력하세요: ', (name) => {
  console.log(`안녕하세요, ${name}님!`);
  rl.close();
});