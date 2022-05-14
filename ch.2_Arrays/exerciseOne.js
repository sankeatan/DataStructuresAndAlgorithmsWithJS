// Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

const { throws } = require("assert");

const sum = (accumulator, curr) => accumulator + curr;

class Grades {
    grades = [];
    add = (grade) => {
        this.grades.push(grade);
    };
    
    average = this.grades.reduce(sum(0, this.grades[0]))/this.grades.length;
    generateTestGrades = (number) => {
        for (var i = 0; i < number; i++){
            this.add(Math.floor(Math.random() * 101))
        }
    };
}



var testStudent = new Grades;
console.log('No grades: ' + testStudent.grades);
testStudent.generateTestGrades(10);
console.log('Test grades: ' + testStudent.grades);
console.log('Test average: ' + testStudent.average);

