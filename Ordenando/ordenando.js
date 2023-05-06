const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

const shuffle = (arr, nSwaps = arr.length) => {
    for (let i = 0; i < nSwaps; i++) {
        const indexA = Math.floor(Math.random() * arr.length);
        const indexB = Math.floor(Math.random() * arr.length);
        swap(arr, indexA, indexB);
    }
};

const bubble_sort = (arr) => {
    let n = arr.length;
    do {
        let newN = 0;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                swap(arr, i - 1, i);
                newN = i;
            }
        }
        n = newN;
    } while (n !== 0);
};

const selection_sort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

const quick_sort = (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quick_sort(arr, left, pivotIndex - 1);
        quick_sort(arr, pivotIndex + 1, right);
    }
};

const partition = (arr, left, right) => {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, right);
    return i + 1;
};
