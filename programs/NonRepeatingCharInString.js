

let str = "swiss";
function nonRepeatingCharacters(s) {
    const charCount = {};   

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    const nonRepeatingChars = [];   
    for (let char of s) {
        if (charCount[char] === 1) {
            nonRepeatingChars.push(char);
        }
    }
    return nonRepeatingChars;
}   

const result = nonRepeatingCharacters(str);
if (result.length > 0) {
    console.log('First non-repeating character:', result[0]);
} else {
    console.log('All characters are repeating.');
}       

