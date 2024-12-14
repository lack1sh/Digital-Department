function findMinEvenElementsOfRows(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return "Данные введены неверно.";
    }

    const minEvenElements = [];

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];

        if (!Array.isArray(row)) {
            return "Каждая строка должна быть массивом."
        }

        if (row.length === 0){
            minEvenElements.push(undefined);
            continue
        }

        let minEven = undefined;

        for (let j = 0; j < row.length; j++) {
            const element = row[j];

            if (typeof element !== 'number') {
                return "Элементы матрицы должны быть числами.";
            }
            if (element % 2 === 0) {
                if (minEven === undefined || element < minEven) {
                    minEven = element;
                }
            }
        }
       minEvenElements.push(minEven);
    }

    return minEvenElements;
}


const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];
console.log(findMinEvenElementsOfRows(matrix1));