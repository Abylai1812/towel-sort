
module.exports = function towelSort(matrix) {
    let result = [];
    while (matrix.length > 0) {
      result = result.concat(matrix.shift());
      if (matrix.length > 0 && matrix[0].length > 0) {
        for (let i = 0; i < matrix.length; i++) {
          result.push(matrix[i].pop());
        }
      }
    }
    return result;
  }
  
