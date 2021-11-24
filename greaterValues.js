/* Given n sorted array of integers, and a target value return the number of values greater the target. */

function greaterValues(arr, target) {
    arr = arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    if (arr[mid] < target) {
      //try again with the right side
      return greaterValues(arr.slice(mid+1));
    } else if (arr[mid] === target) {
      if (arr[mid+1] > target) {
        return arr.slice(mid+1).length;
      }
    } else if (arr[mid] > target) {
      //try again with the left side to find <=
      return greaterValues(arr.slice(0, mid));
    }
    return 0;

    //ELSE can check if mid - 1 and + 1 range includes the target
      //can count from there higher or lower?
  }

module.exports = greaterValues;
