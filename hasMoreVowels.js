function moreVowels (word) {
    let string = word
    let wordArray = Array.from(string)
    // console.log(wordArray)
    let vowelArray = []
    let consonantArray = []
    for (let i = 0; i <wordArray.length; i++)
    if (wordArray[i] === 'a' || wordArray[i] === `e` ||
    wordArray[i] === `i` || wordArray[i] === `o` || 
    wordArray[i] === `u`){
    vowelArray.push(wordArray[i])
    } else {consonantArray.push(wordArray[i])}
    // console.log(consonantArray)
    // console.log(vowelArray)
    if (vowelArray.length > consonantArray.length){
      console.log(`true`)
    } else console.log(`false`)
    }
    
    
    moreVowels(`word`)
    moreVowels(`loooop`)