const arr = [4, 2, -3, 5, 6, 8, 1, 0];
const sum = -1;
console.log(numberOfPairs(arr, sum));
// Pais that matches are [4, 2] => 6. [5, 1] => 6
//So output 2
function numberOfPairs(arr,sum){
    let count=0;
    for(let i=0; i<arr.length-1; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==sum){
                count++;
            }
        }
    }
    return count;
}