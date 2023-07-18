function solution(nums) {
    var answer = [];

    
    for(i=0; i<nums.length; i++){
        if(answer.length < nums.length/2){      // N/2 마리까지 포획 
            if(!answer.includes(nums[i])){      // answer에 기존 번호의 포켓몬이 있는 지 확인 
                answer.push(nums[i])            // 없다면 answer에 추가 
            }
            
        }
    }
    
    return answer.length;
}