//Q1 make a string out of an array
{const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(',');
console.log(result);} 
//Q2 make an array out of a string
{const fruits = 'π, π₯, π, π';
const result = fruits.split(',');
console.log(result);
}
//Q3  make this array look like this: [5, 4, 3, 2, 1]
{const array = [1, 2, 3, 4, 5];
console.log(array.reverse());
} 
//Q4  make new array without the first two elements
//The slice() method returns a shallow copy => μλ³Έ λ°°μ΄μ μ‘°μνμ§ μλλ€. 
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
    const result = students.map((value) => value.score); // callback fn μΈμλ λ  μ μμΌλ©΄ μ°κ΄λλ κ²μΌλ‘. value => student
    console.log(result);
  }
  // Q8. CHECK if there is a student with the score lower than 50
  {
    const result = students.some((student) => student.score < 50);
    console.log(result);
    const result2 = !students.every((student) => student.score >= 50); // !: λμ°λ₯Ό λ¦¬ν΄νλ€. 
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
    .join('/');  //*ν¨μν νλ‘κ·Έλλ°
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
// expected output: Array ["Jan", "Feb", "March", "April", "May"] => μλ³Έμ μ‘°μνλ€. 

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

