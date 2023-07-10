//Last Position Change in arrays
const arr= [3, 45, 42, 11, 34];
console.log(changePosition(arr, 5));
//Output -> [11, 34, 3, 45, 42];

function changePosition(arr,pos){
    if (arr.length === pos) {
        return arr;
    }
    const res=[];
    for(let i=arr.length-pos; i<arr.length; i++){
        res.push(arr[i]);
    }
    for(let j=0; j<arr.length-pos; j++){
        res.push(arr[j]);
    }
    return res;
}