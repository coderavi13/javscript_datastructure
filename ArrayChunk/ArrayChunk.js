//Solution  1

const arr = [1, 2, 10, 3, 4, 5, 6, 7, 8]

let chunkArr = [];
let chunk = [];
const chunkSize = 2;
let counter = 0;
for (let value of arr) {
    if (counter < chunkSize) {
        chunk.push(value)
    }
    else {
        chunkArr.push(chunk);
        chunk = [];
        chunk.push(value)
        counter = 0;
    }
    counter++;
}


chunkArr.push(chunk);

console.log("Chnunk arr", chunkArr);


//Solution 2
let chunkArray2 = [];

let index = 0;
while (index < arr.length) {
    chunkArray2.push(arr.slice(index, index + chunkSize));
    index = index + chunkSize;
}

console.log("Chnunk arr", chunkArray2);
