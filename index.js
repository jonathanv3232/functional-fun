//forEach
Array.prototype.forEach = function(func) {
  for (let i = 0; i < this.length; i++) {
    func(this[i]);
  }
  return this;
};

//map
Array.prototype.map = function(projectionFunc) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(projectionFunc(this[i]));
  }
  return newArr;
};

//filter

Array.prototype.filter = function(predicateFunction) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (predicateFunction(this[i])) newArr.push(this[i]);
  }
  return newArr;
};

//concatAll
// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"

Array.prototype.concatAll = function() {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    //using apply to spread the arguments to push
    newArr.push.apply({}, this[i]);
  }
};

// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }); === [6];
// [1,2,3].reduce(function(accumulatedValue, currentValue) { return accumulatedValue + currentValue; }, 10); === [16];
Array.prototype.reduce = function(combinerFunc, initialValue) {
  let accumulatedValue, i;
  //if the array is empty then return it
  if (this.length == 0) {
    return this;
  } else {
    if (arguments.length == 1) {
      //if there is no initial value supplied then use the first value and skip the first element in the loop
      i = 1;
      accumulatedValue = this[0];
    } else if (arguments.length >= 2) {
      // if there is an initial value supplied use that
      i = 0;
      accumulatedValue = initialValue;
    }

    for (; i < this.length; i++) {
      accumulatedValue = combinerFunc(accumulatedValue, this[i]);
    }

    return [accumulatedValue];
  }
};
