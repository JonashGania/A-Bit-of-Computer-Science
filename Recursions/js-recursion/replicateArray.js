// create a function that returns an array containing repetitions of the argument. e.g replicate(3,5) = [5,5,5].

function replicate(times, num){
    if(times <= 0){
        return [];
    } else {
        return [num].concat(replicate(times - 1, num));
    }
}

replicate(3, 5);

//  replicate(3, 5)
//      [num].return [num].concat(replicate(3 - 1, num))
//          [num].return [num].concat(replicate(2 - 1, num))
//              [num].return [num].concat(replicate(1 - 1, num))
//              return [5]
//          return [5, 5]
//      return [5,5,5]