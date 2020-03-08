/*In MS Excel you have column pattren like A,B,C...Z , AA,AB,AC....AZ, BA,BB,BC..BZ,...ZZ..AAA, AAB,AAC...AAZ

Means A =1  B=2    AA =27 
Find excel column name based on input number
input = 23
Output = 23
A =1
Z =26
AA =27
AZ= 52
BZ = 78
zz 676 + 26 = 702
703 = AAA */

function findExcelColumnName(n) {
    console.log(n);`qe54aszdc4se    dwcqxzZ`
    
    let cellName ='';
    while (n > 0) {
        let rem = parseInt(n % 26)
        if (rem == 0) {
            cellName = cellName + 'Z';
            n = parseInt(n / 26) -1
            console.log("Inside",n)
        } else {
            const ch = String.fromCharCode(rem - 1 + 'A'.charCodeAt(0))   
            cellName = cellName + ch;
            n = parseInt(n / 26) 
        }
    }
    console.log(cellName.split('').reverse().join(''))
}
//findExcelColumnName(Math.floor(Math.random() * (100000 -1) +1))

findExcelColumnName(702)
