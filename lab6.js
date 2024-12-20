// Реализуйте функцию для поиска в двух заданных массивах элементов, которые присутствуют в обоих массивах. Используйте Set.
function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const commonElements = [];
  
    for (const element of arr2) {
      if (set1.has(element)) {
        commonElements.push(element);
      }
    }
  
    return commonElements;
  }
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [3, 5, 6, 7, 8];
  const common = findCommonElements(array1, array2);
  console.log("Общие элементы:", common);


//Реализуйте функцию, которая подсчитывает количество вхождений каждого элемента в массиве. Используйте Map.
function countElementOccurrences(arr) {
    const occurrences = new Map();
  
    for (const element of arr) {
      if (occurrences.has(element)) {
        occurrences.set(element, occurrences.get(element) + 1);
      } else {
        occurrences.set(element, 1);
      }
    }
  
    return occurrences;
  }
  
  
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  const counts = countElementOccurrences(numbers);
  console.log("Количество вхождений:", counts);


//В массиве студентов подсчитать число обучающихся в самой большой группе. Номер группы – свойство класса Student типа string.
class Student {
  constructor(name, group) {
    this.name = name;
    this.group = group;
  }
}

function findLargestGroupSize(students) {
  const groupCounts = new Map();

  for (const student of students) {
    if (groupCounts.has(student.group)) {
      groupCounts.set(student.group, groupCounts.get(student.group) + 1);
    } else {
      groupCounts.set(student.group, 1);
    }
  }

  let largestSize = 0;
  for (const count of groupCounts.values()) {
     if (count > largestSize) {
        largestSize = count;
      }
    }

  return largestSize;
}

const students = [
  new Student("Alice", "A101"),
  new Student("Bob", "A102"),
  new Student("Charlie", "A101"),
  new Student("David", "A103"),
  new Student("Eve", "A102"),
  new Student("Frank", "A102"),
];

const largestGroup = findLargestGroupSize(students);
console.log("Число студентов в самой большой группе:", largestGroup);