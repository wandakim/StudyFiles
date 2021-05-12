//Q1 make a string out of an array
{const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(',');
console.log(result);} 
//Q2 make an array out of a string
{const fruits = '🍎, 🥝, 🍌, 🍒';
const result = fruits.split(',');
console.log(result);
}
//Q3  make this array look like this: [5, 4, 3, 2, 1]
{const array = [1, 2, 3, 4, 5];
console.log(array.reverse());
} 
//Q4  make new array without the first two elements
//The slice() method returns a shallow copy => 원본 배열을 조작하지 않는다. 
//of a portion of an array into a new array object selected from start to end (end not included) 
{const array = [1, 2, 3, 4, 5]
const result = array.slice(2, 5);
console.log(array);//
console.log(result);//[3,4,5]
}
console.clear();

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
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90  
  {
    const result = students.find((student) => student.score === 90); //* value..? 
    console.log(result);
  }  
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((value) => value.enrolled === true);
    const enrolledStudentName = result.map(student=>student.name);
    console.log(enrolledStudentName);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((value) => value.score); // callback fn 인자는 될 수 있으면 연관되는 것으로. value => student
    console.log(result);
  }
  // Q8. CHECK if there is a student with the score lower than 50
  {
    const result = students.some((student) => student.score < 50);
    console.log(result);
    const result2 = !students.every((student) => student.score >= 50); // !: 대우를 리턴한다. 
    console.log(result2);
  }
  
  // Q9. compute students' average score
  {
    const result = students.reduce((prev, curr) => prev + curr.score, 0) //* 
    console.log(result/ students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {  
    const result = students
    .map((value) => value.score )
    // .filter((score => score >= 50)) 
    .join('/');  //*함수형 프로그래밍
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students
      .map((student) => student.score)
      .sort((a,b) => a-b)
      .join();
    console.log(result);
  }

//splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"] => 원본을 조작한다. 

const splice = months.splice(0,1);
console.log(splice); //["Jan"]
console.log(months); //["Feb", "March", "April", "May"]



/** splice
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2, itemN)
 */

//deleteCount (Optional)
//An integer indicating the number of elements in the array 
//to remove from start.

