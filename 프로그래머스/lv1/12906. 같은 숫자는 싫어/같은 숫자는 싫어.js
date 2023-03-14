function solution(arr)
{
    var answer = [];

    for(i=0; i<arr.length; i++){
     if(arr[i]!==arr[i+1]){
         answer.push(arr[i])
     }
       
    }
    console.log(answer)
    return answer;
}


// i 번째와 i+1 번째가 같으면 i 번째만 answer 에추가