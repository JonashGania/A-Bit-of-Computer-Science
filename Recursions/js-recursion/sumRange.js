// Using recursion, return the sum of all numbers from 1 up to the number passed in.

function sumRange(n){
    if(n === 1){
        return 1;
    }

    return n + sumRange(n - 1);
}

sumRange(4);

//  sumRange(4)
//      4 + sumRange(4 - 1)
//          3 + sumRange(3 - 1)
//              2 + sumRange(2 - 1)
//              return 2 + 1
//          return 3 + 3
//      return 4 + 6
//  = 10 