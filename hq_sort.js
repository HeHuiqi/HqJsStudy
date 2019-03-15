let data = [1, 8, 7, 5, 6, 2, 3, 9, 4];
console.log("原数据：" + data);

/*
[1, 8, 7, 5, 6, 2, 3, 9, 4]
[1, 8, 7, 5, 6, 2, 3, 9, 4]
[1, 2, 8, 7, 6, 5, 3, 9, 4]
[1, 2, 3, 8, 7, 6, 5, 9, 4]
[1, 2, 3, 4, 8, 7, 6, 9, 5]
[1, 2, 3, 4, 5, 8, 7, 9, 6]
[1, 2, 3, 4, 5, 6, 8, 9, 7]
[1, 2, 3, 4, 5, 6, 7, 9, 8]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
---------------------------
[1, 8, 7, 5, 6, 2, 3, 9, 4]
[1, 7, 5, 6, 2, 3, 8, 4, 9]
[1, 5, 6, 2, 3, 7, 4, 8, 9]
[1, 5, 2, 3, 6, 4, 7, 8, 9]
[1, 2, 3, 5, 4, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
[1, 2, 3, 4, 5, 6, 7, 8, 9]

*/


//冒泡排序
function bubbleSort(data) {
    let len = data.length;
    for (let i = 0; i < len; i++) {
        console.log(data);

        //内层循环进行比较

        // for(let j = 0;j<len-1-i;j++){
        //     let min = data[j];
        //     let next = data[j+1];
        //     if (min > next) { // 相邻元素两两对比
        //         var temp = next // 元素交换
        //         data[j + 1] = min;
        //         data[j] = temp;
        //     }
        // }

        for (let j = i + 1; j < len; j++) {
            let min = data[i];
            let next = data[j];
            if (min > next) { // 相邻元素两两对比
                var temp = next // 元素交换
                data[j] = min;
                data[i] = temp;
            }
        }

    }
}
// bubbleSort(data);

//选择排序
function selectionSort(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        console.log(arr);
        let index = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[index]) { // 寻找最小元素的下标
                index = j; //保存下标
            }
        }
        //当下标不同时才交换数据
        if (index != i) {
            let temp;
            temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
        }
    }
}
// selectionSort(data);

//插入排序
function insertSort(arr) {
    let length = arr.length;
    let preIndex, currentValue;
    for (let i = 0; i < length; i++) {

        preIndex = i - 1;
        currentValue = arr[i];
        while (preIndex >= 0 && arr[preIndex] > currentValue) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = currentValue;
        console.log(arr);
    }
}
insertSort(data);
console.log("排序结果：" + data);
