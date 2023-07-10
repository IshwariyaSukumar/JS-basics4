const arr = [34, 12, 10, 15, 7, 21, 81];

console.log(JSON.stringify(groupMultiples(arr)));
function groupMultiples(arr){
    const multiples={
        one:[],
        two:[],
        three:[],
        four:[],
        five:[],
        six:[],
        seven:[],
        eight:[],
        nine:[],
        ten:[]
        
    };
    let i=0;
    while(i<arr.length){
        multiples.one.push(arr[i]);
        if(arr[i]%10==0){
            multiples.ten.push(arr[i]);
        }
        if(arr[i]%9==0){
            multiples.nine.push(arr[i]);
           
        }
        if(arr[i]%8==0){
            multiples.eight.push(arr[i]);
           
        }
         if(arr[i]%7==0){
            multiples.seven.push(arr[i]);
        }
        if(arr[i]%6==0){
            multiples.six.push(arr[i]);
           
        }
        if(arr[i]%5==0){
            multiples.five.push(arr[i]);
        }
       if(arr[i]%4==0){
            multiples.four.push(arr[i]);
        }
        if(arr[i]%3==0){
            multiples.three.push(arr[i]);
        }
         if(arr[i]%2==0){
            multiples.two.push(arr[i]);
        }
        
       i++;
    }
    return multiples;
}