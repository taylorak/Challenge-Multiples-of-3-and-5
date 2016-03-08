/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;
  for(var i = n - 1; i > 2; i--)
    if(isMultiple(i)) sum += i;
  return sum;
};

var isMultiple = function(n) {
  return n % 3 === 0 || n % 5 === 0
}
