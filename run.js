// run.js
const { exec } = require("child_process");
const { spawn } = require("child_process");

// 파일 경로 인수 받기
const filePath = process.argv[2];
if (!filePath) {
  console.error("파일 경로를 입력하세요. 예: npm start src/step1/problem1.ts");
  process.exit(1);
}

console.log('원본 소스 경로: ' + filePath);

// TypeScript 컴파일 명령어 생성
const tscCommand = `tsc -p tsconfig.json`;
let jsFilePath = '';

// 컴파일 실행
exec(tscCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`컴파일 오류: ${stderr}`);
    process.exit(1);
  }

  // 컴파일된 파일 경로에서 .ts를 .js로 변경
  jsFilePath = filePath.replace("src", "dist").replace(".ts", ".js");
  console.log('실행 파일 경로: ' + jsFilePath);

  // spawn을 사용하여 실시간으로 실행
  const nodeProcess = spawn("node", [jsFilePath], {
    stdio: "inherit" // 터미널 입력/출력을 상속하여 실시간 상호작용 가능
  });

  // 오류 발생 시 출력
  nodeProcess.on("error", (err) => {
    console.error(`실행 오류: ${err.message}`);
    process.exit(1);
  });

  // 프로세스 종료 시 종료 코드 출력
  nodeProcess.on("close", (code) => {
    console.log(`프로그램 종료, 종료 코드: ${code}`);
  });
});

