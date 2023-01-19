const longestWord = (sentence) => {
    let result = 0;
    let sentenceArray = sentence.split(" ");

    sentenceArray.map((word) => {
        if (word.length > result) {
            result = word.length
        }
    })

    return result;
}

const sentence = "Saya sangat senang mengerjakan soal algoritma"
console.log(longestWord(sentence))