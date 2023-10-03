// Using recursive method, sort an array using merge sort.

function mergeSort(arr){
    if(arr.length === 1){
        return arr;
    }
    else if(arr.length === 0){
        return 'Empty array'
    }
    
    const mid = Math.floor(arr.length / 2);
    const leftArray = arr.slice(0, mid);
    const rightArray = arr.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArr, rightArr){
    const sortedArr = [];
    
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [4, 5, 23, 2, 1, 65, 76];
mergeSort(arr);

