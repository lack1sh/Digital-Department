class Student {
    constructor(name, surname, marks) {
        this.name = name;
        this.surname = surname;
        this.marks = marks;
        this.averageMark = this.calculateAverageMark();
    }

    calculateAverageMark() {
        if (this.marks.length === 0) {
            return 0;
        }
        return this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
    }

    toString() {
        return `${this.surname}, ${this.name} (avg: ${this.averageMark.toFixed(2)})`;
    }
}

function binarySearch(students, surname, name) {
    students.sort((a, b) => {
        let surnameComparison = a.surname.localeCompare(b.surname);
        if (surnameComparison !== 0) {
            return surnameComparison;
        } else {
            return a.name.localeCompare(b.name);
        }
    });

    let low = 0;
    let high = students.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let student = students[mid];

        if (student.surname === surname && student.name === name) {
            return student;
        } else if (student.surname < surname || (student.surname === surname && student.name < name)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return null;
}

const studentsData = [
    { name: "Alice", surname: "Smith", marks: [5, 4, 5] },
    { name: "Bob", surname: "Johnson", marks: [3, 5, 4] },
    { name: "Charlie", surname: "Smith", marks: [4, 5, 5] },
    { name: "David", surname: "Brown", marks: [4, 5, 5] },
    { name: "Eva", surname: "Johnson", marks: [2, 5, 4] },
    {name: "Charlie", surname: "Brown", marks:[5,5,5]},
    {name: "Bob", surname:"Smith", marks:[5,5,5]}
];

const students = studentsData.map(studentData => new Student(studentData.name, studentData.surname, studentData.marks));


const searchedStudent = binarySearch(students, "Smith", "Charlie");
const searchedStudent2 = binarySearch(students, "Brown", "Charlie");
const searchedStudent3 = binarySearch(students, "Smith", "Bob");


if (searchedStudent) {
    console.log("Найденный студент 1:", searchedStudent.toString());
} else {
    console.log("Студент 1 не найден.");
}

if (searchedStudent2) {
    console.log("Найденный студент 2:", searchedStudent2.toString());
} else {
    console.log("Студент 2 не найден.");
}
if (searchedStudent3) {
    console.log("Найденный студент 3:", searchedStudent3.toString());
} else {
    console.log("Студент 3 не найден.");
}