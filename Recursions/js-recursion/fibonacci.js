// using iteration, write a function which takes a number and returns an array containing 
// that many numbers from the fibonacci sequence

function fibs(num, arr=[0,1]){
    let a = 0;
    let b = 1;

    if(num === 1){
        return [0];
    }
    else if (num === 2){
        return arr;
    }
    else{
        for(let i = 3; i <= num; i++){
            let c = a + b;
            a = b;
            b = c;
            arr.push(b);
        }

        return arr;
    }
}

fibs(10);

// using recursive, write a function which takes a number and returns an array containing 
// that many numbers from the fibonacci sequence

function fibsRec(num, arr=[0, 1]){
    if(num === 1){
        return [0];
    } else if (num === 2){
        return arr;
    } else {
        let nextNum = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(nextNum);
        
        return fibsRec(num - 1, arr);
    }
}

fibsRec(10);