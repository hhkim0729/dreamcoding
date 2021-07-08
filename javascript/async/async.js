// async & await
// clear style of using promise

// 1. async
// 함수의 코드 블록을 자동으로 Promise로 변환해줌
async function fetchUser() {
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
// 동기적으로 보이게 비동기 코드를 작성할 수 있어서 체이닝을 하는 것보다 깔끔
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  // getApple과 getBanana가 병렬적으로 실행되어 1초만 소요됨
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  // 모든 프로미스를 병렬적으로 처리
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  // 먼저 실행된 프로미스만 처리
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
