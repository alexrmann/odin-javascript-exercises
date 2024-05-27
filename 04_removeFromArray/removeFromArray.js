const removeFromArray = function (array, ...args) {
  const newArray = [];

  // For each item in the original array, perform a function that accepts the argument "item" (which represents the item at each index in the ...args rest parameter). If item is NOT included in the args rest parameter array, push it into newArray.
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
