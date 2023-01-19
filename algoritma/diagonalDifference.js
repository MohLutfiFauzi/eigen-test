function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        let temp = (arr[i].length - 1) - i
        leftToRight += arr[i][i]
        rightToLeft += arr[i][temp]
    }

    let min = Math.min(leftToRight, rightToLeft);
    let max = Math.max(leftToRight, rightToLeft);

    return max - min
}

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
console.log(diagonalDifference(matrix))