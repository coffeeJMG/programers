function solution(numbers) {
    var answer = 45;
   
    for(i=0; i<numbers.length; i++){
        let item= numbers[i];
        answer -=item
    }
    
    return answer;
}



// 0~9 의 합인 45에서 배열의 합을 뺀다.
