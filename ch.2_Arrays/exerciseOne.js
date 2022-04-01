// Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

function Grades (){
    this.grades = [];
    this.add = (grade) => {
        this.grades.push(grade);
    };
    this.average = () => {
        var avg = this.grades.reduce(sum)/this.grades.length;
        return avg;
    };
    this.generateTestGrades = (number) => {
        for (var i = 0; i < number; i++){
            this.add(Math.floor(Math.random() * 101))
        }
    };
}

function sum(runningTotal, currentValue) {
    return runningTotal + currentValue;
   }

var testStudent = new Grades();
console.log('No grades: ' + testStudent.grades);
testStudent.generateTestGrades(10);
console.log('Test grades: ' + testStudent.grades);
console.log('Test average: ' + testStudent.average);

