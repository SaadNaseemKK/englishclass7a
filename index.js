/* 
we want to prepareFood which will take 20ms and then want to prepare frenchtoast which will take 10ms
but when we execute this code frenchtoast is ready after 10ms and then food preparation is done at 20ms
this problem is soleved in index1.js using callbacks.
*/
console.log("index.js");
console.log("Breakfast");

function prepareFood(callback) {

    setTimeout(() => {
        console.log("prepareFood: Preparing.");
        callback("Done.");
    }, 20);
}

function prepareFoodCallback(value) {
    console.log("prepareFoodCallback :", value);
}

function prepareFrenchToast(callback) {

    setTimeout(() => {
        console.log("prepareFrenchToast: Preparing.");
        callback("Done.");
    }, 10);
}

function prepareFrenchToastCallback(value) {
    console.log("prepareFrenchToastCallback :", value);
}

prepareFood(prepareFoodCallback);
prepareFrenchToast(prepareFrenchToastCallback);

console.log("Dinner");