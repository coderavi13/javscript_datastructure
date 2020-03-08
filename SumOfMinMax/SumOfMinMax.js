function miniMaxSum(arr) {
    arr.sort();
    let min=0;
    let max =0;
    for(let i = 0 ;i<arr.length ;i++){
if(i == 0){
    min = min + arr[i]
   
}
else if(i == arr.length -1){
    max = max + arr[i];
}
else{
      max = max + arr[i];
      min = min + arr[i];
}
    }
return `${min} ${max}`

}

const arr =[1,2,3,4,5];

console.log(miniMaxSum(arr));


