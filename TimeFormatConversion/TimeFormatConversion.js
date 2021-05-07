/* HackerRank Question:
Convert 12 hour Time format into 24 out Time format */
const date1 ='01:05:45AM';

let timeArr= date1.substring(0,8).split(':');
let timeUnit= date1.substring(8,10);


if(timeUnit == 'AM' && timeArr[0] == '12')
{
    timeArr[0] ='00';
}

else if(timeUnit == 'PM' &&  timeArr[0] < 12)
{
    timeArr[0] =parseInt(timeArr[0]) + 12;
}
console.log("12 hour time format : ",date1)
console.log("24 hour time format : ",timeArr.join(':')) 