function solution(numbers) {
    var answer = [];
    let sum=0;
    
    answer.push(numbers[0]+numbers[1])
    
    for(i=0; i<numbers.length; i++){
        let item = numbers[i]
        for(j=i+1; j<numbers.length; j++){
            
            sum= item+numbers[j];
          if( answer.indexOf(sum) === -1) {     // sum의 값이 존재하지 않는다면 추가 
          answer.push(sum);
        }
        }
    }
    
    answer.sort((a,b)=>a-b)
    return answer;
}
// i     +  i+1,i+2,i+3,i+4
// i+1   +  i+2, i+3,


// 각 인덱스의 합을 구하고 중복되는 값은 제외