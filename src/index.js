
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let i = 0;
  let reversed;
  if (!matrix){
    return [];
  }
  let C = [];
  matrix.forEach(function(item){
    if (i % 2 != 0){
      reversed = item.reverse();
    }
    else{
      reversed = item;
    }
    i++;
    item.forEach(function(item2){
      C.push(item2);
    })
  })
  return C;
}
