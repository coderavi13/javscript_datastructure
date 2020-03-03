function diagonalDifference(arr) {
    // Write your code here
let left=0;
let right=0;
for(let i =0;i<arr.length;i++){
    left =left + arr[i][i]
}
let j = arr.length -1;
let k =0;
while(k < arr.length){
    console.log(j,k);
    
right = right + arr[j][k];
j--;
k++;
}
console.log(left);
console.log(right);

return Math.abs(left - right)

}

const arr = [
    [11 ,2 ,4],
[4, 5, 6],
[10, 8, -12]
]

const res =diagonalDifference(arr);

console.log("Result",res)

