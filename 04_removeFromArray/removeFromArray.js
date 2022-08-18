const removeFromArray = function(originalArray, ...testValues) {
    return originalArray.filter(element => !testValues.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
