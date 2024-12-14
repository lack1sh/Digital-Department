function calculateProductBetweenMinMax(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
      return "Не верно введены значения.";
    }
  
    let min = arr[0];
    let max = arr[0];
    let minIndex = 0;
    let maxIndex = 0;
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        minIndex = i;
      }
      if (arr[i] > max) {
        max = arr[i];
        maxIndex = i;
      }
    }
  
    const start = Math.min(minIndex, maxIndex) + 1;
    const end = Math.max(minIndex, maxIndex);
  
    if (end - start === 0){
       return 1
    }
  
    let product = 1;

    for (let i = start; i < end; i++) {
      product *= arr[i];
    }
  
    return product;
  }
  
  const arr1 = [1, 5, 2, 8, 3, 9, 4];
  console.log(calculateProductBetweenMinMax(arr1));
  
  const arr2 = [9, 5, 2, 7, 8, 3, 1, 4];
  console.log(calculateProductBetweenMinMax(arr2));
  
  const arr3 = [1, 2, 3];
  console.log(calculateProductBetweenMinMax(arr3));
  
  const arr4 = [5, 5, 5, 5];
  console.log(calculateProductBetweenMinMax(arr4));
  
  const arr5 = [10, 1];
  console.log(calculateProductBetweenMinMax(arr5));
  
  const arr6 = [5];
  console.log(calculateProductBetweenMinMax(arr6));
  
  const arr7 = "not an array";
  console.log(calculateProductBetweenMinMax(arr7))