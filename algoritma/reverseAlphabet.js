const reverseAlpabet = (str) => {
    let strArray = str.split('');
    let number = strArray.splice(-1);
    return strArray.reverse().join("") + number
}

const word = 'NEGIE1';
console.log(reverseAlpabet(word))