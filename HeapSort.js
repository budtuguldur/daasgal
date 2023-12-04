function swap(arr, i, largest) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
}
function heapify(arr, N, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2; 
    if (l < N && arr[l] > arr[largest]) {
     largest = l;
     }
    if (r < N && arr[r] > arr[largest]) {
     largest = r;
     }
    if (largest != i) {
     swap(arr, i, largest);
    heapify(arr, N, largest);
    }

}
function heapSort(arr){
    let N = arr.length;
    for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
     heapify(arr, N, i);
     }
    for (let i = N - 1; i > 0; i--) {
     swap(arr,0, i);
     heapify(arr, i, 0);
     }
    }
    let arr = [23, 235, 12, 11,30];
    console.time();
    heapSort(arr);
    console.timeEnd();
    printArr(arr)

    console.log(arr)

    function printArr(arr){
        process.stdout.write("[");
        for(let i=0; i<arr.length; i++){
            process.stdout.write(arr[i] + ",");
        }
        process.stdout.write("]");
    }