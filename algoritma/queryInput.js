function elementCount(arr, element) {
    return arr.filter((currentElement) => currentElement === element).length;
}

function queryInput(input, query) {
    let result = [];
    for (let str of query) {
        result.push(elementCount(input, str))
    }
    return result
}


let input = ['xc', 'dz', 'bbb', 'dz'];
let query = ['bbb', 'ac', 'dz'];

console.log(queryInput(input, query));