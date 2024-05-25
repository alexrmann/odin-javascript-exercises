const reverseString = function(input) {
    let stringArray = input.split('');
    let reverseArray = stringArray.reverse();
    let newString = reverseArray.join('');

    return newString;
};

// Do not edit below this line
module.exports = reverseString;
