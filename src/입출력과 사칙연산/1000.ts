import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: ""
});

rl.prompt();

rl.on("line", (input) => {
    const [a, b] = input.split(' ').map((item) => {
        return parseInt(item);
    });
    console.log(a+b);
    rl.close();
});