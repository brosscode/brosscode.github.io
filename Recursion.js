// Recursion

var arr = [5,2,3,8,9,6,12,67,89,125,82];

let storageCurrent;
let storageAtValue = 0;
let i = 0;

function hello() {
    maxValue();
}

// gotta add a tracking array that can be changed
function arrSort() {
    for (let i = 0; i < arr.length; i++){
        // setstorage to it
        storageCurrent = arr[i];
        // search through the next var
        for (let j = 0; j < arr.length; j++){
            // compare storage to other var
            if (storageCurrent > arr[j]){
                // swap
                arr[i] = arr[j];
                arr[j] = storageCurrent;
                break;
            }
        }
    }
    console.log(arr);
    arrSort(arr);
}

function maxValue() {
    storageCurrent = arr[i];
    let tracker = storageCurrent;
    i += 1;
    if (storageCurrent > storageAtValue){
        tracker = storageCurrent;
        storageAtValue = storageCurrent;
    }
    if (storageAtValue == tracker){
        return storageAtValue;
    }
    console.log(storageAtValue);
    maxValue();
}

