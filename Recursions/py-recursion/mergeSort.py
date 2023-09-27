# Using recursive method, sort an array using merge sort.

def merge_sort(arr):
    if len(arr) == 1:
        return arr
    elif len(arr) == 0:
        return "Empty array"
    
    mid = len(arr) // 2
    leftArray = arr[:mid]
    rightArray = arr[mid:]

    return merge(merge_sort(leftArray), merge_sort(rightArray))

def merge(leftArr, rightArr):
    sortedArr = []

    while leftArr and rightArr:
        if leftArr[0] <= rightArr[0]:
            sortedArr.append(leftArr.pop(0))
        else:
            sortedArr.append(rightArr.pop(0))
    
    sortedArr.extend(leftArr)
    sortedArr.extend(rightArr)

    return sortedArr

arr = [4, 5, 23, 2, 1, 65, 76]
merge_sort(arr)