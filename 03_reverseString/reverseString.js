const reverseString = function(givenString) {   
    let stringLength = givenString.length;
    const letters = [];
    for(let i = 0; i <= stringLength; i++){
        letters[i] = givenString.charAt(i);
    }
    let reversedString = "";
    for(let x = stringLength; x >= 0; x--){
        reversedString += letters[x];
    }
    return reversedString;
};


// Do not edit below this line
module.exports = reverseString;
