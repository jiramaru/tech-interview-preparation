Array.prototype.myFilter = function(callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    if (callback(item, i, this)) {
      result.push(item);
    }
  }

  return result;
};

// let's test this
const arr = [7, 10, 17, 14]
const evenNum = arr.myFilter(num=>{
  if(num%2===0){
    return num
  }
})

console.log(evenNum)
