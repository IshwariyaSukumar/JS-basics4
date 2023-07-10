const arr1 = [3, 45, 42, 11, 1];
const arr2 = [35, -7, 87, 11, 1, 45, 3]
console.log(findCommon(arr1, arr2));
//Output = [11, 45]

function findCommon(arr1,arr2){
    const res=[];
    const arrToLoop = arr1.length > arr2.length ? arr1 : arr2;
    const arrToMatch = arr1.length > arr2.length ? arr2 : arr1;
    for(let i=0; i<arrToLoop.length; i++){
        if(arrToMatch.includes(arrToLoop[i])){
            res.push(arrToLoop[i]);
        }
    }
    // if(arr1.length>arr2.length){
    //     for(let i=0; i<arr1.length; i++){
    //         let temp=arr1[i];
    //         if(arr2.includes(arr1[i])==true){
    //             res.push(arr1[i]);
    //         }
    //     }
    // }
    // else{
    //     for(let j=0; j<arr2.length; j++){
    //         let temp=arr2[j];
    //         if(arr1.includes(arr2[j])==true){
    //             res.push(arr2[j]);
    //         }
    //     }
    // }
    return res;
}