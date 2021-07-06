// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  //   let str = '';
  //   fruits.forEach(fruit => (str += fruit));
  //   console.log(str);
  const result = fruits.join(' * '); // 구분자를 지정하지 않으면 기본적으로 콤마(,)
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',', 2);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  //   const length = array.length;
  //   let tmp;
  //   for (let i = 0; i < length / 2; i++) {
  //     tmp = array[i];
  //     array[i] = array[length - 1 - i];
  //     array[length - 1 - i] = tmp;
  //   }
  //   console.log(array);
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
// splice와 달리 배열 자체를 변경시키지 않음
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88)
];

// Q5. find a student with the score 90
// 콜백 함수가 첫 번째로 true를 리턴하는 오브젝트를 찾음
{
  // let result;
  // for (student of students) {
  //   if (student.score === 90) {
  //     result = student;
  //   }
  // }
  // console.log(result);
  const result = students.find(student => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // const result = [];
  // students.forEach(student => {
  //   if (student.enrolled === true) {
  //     result.push(student);
  //   }
  // });
  // console.log(result);
  const result = students.filter(student => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // const result = [];
  // students.forEach(student => result.push(student.score));
  // console.log(result);
  const result = students.map(student => student.score);
  console.log(result);
}

console.clear();
// Q8. check if there is a student with the score lower than 50
{
  // let result = false;
  // students.forEach(student => {
  //   if (student.score < 50) {
  //     result = true;
  //   }
  // });
  // console.log(result);

  // 콜백 함수의 리턴값이 true인 값이 있는지 없는지 확인
  const result = students.some(student => student.score < 50);
  console.log(result);

  // 콜백 함수의 모든 리턴값이 true인지 확인
  const result2 = !students.every(student => student.score < 50);
  console.log(result2);
}

console.clear();
// Q9. compute students' average score
// 리턴하는 값을 prev로 전달 (값을 누적할 때 사용)
// reduceRight은 배열의 끝부터
{
  // let sum = 0;
  // students.forEach(student => (sum += student.score));
  // const average = sum / students.length;
  // console.log(average);
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // let result = '';
  // students.forEach((student, index) => {
  //   result += student.score;
  //   if (index !== students.length - 1) {
  //     result += ', ';
  //   }
  // });
  // console.log(result);
  const result = students
    .map(student => student.score)
    .filter(score => score >= 50)
    .join(', ');
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map(student => student.score)
    .sort((a, b) => b - a)
    .join(', ');
  console.log(result);
}
