/* Given n sorted array of integers, and a target value return the number of values greater the target. */

function greaterValues(arr, target) {
    let checker = Math.floor(arr.length / 2);
    if (arr[checker] < target) {
      //try again with the right side
      return greaterValues(arr.slice(checker+1, 0));
    } else if (arr[checker] === target) {
      let newIndex = checker+1;
      if (arr[newIndex] > target) {
        return arr.slice(newIndex).length;
      }
    }
    return 0;
  }

module.exports = greaterValues;
