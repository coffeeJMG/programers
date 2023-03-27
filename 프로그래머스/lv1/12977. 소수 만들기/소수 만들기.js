function solution(nums) {
    var answer = 0;
    let sum=[];
    
    for(i=0; i<nums.length; i++){
        for(j=i+1; j<nums.length; j++){
            for(k=j+1; k<nums.length; k++){
                if(isNaN(nums[j]) ===false && isNaN(nums[k]) ===false){
                   
                       sum.push(nums[i]+nums[k]+nums[j])
                       
                    }
                   
                }
            }
        }
    let count =0;
    for(i=0; i<sum.length; i++){
        let item = sum[i]
        for(j=2; j<sum[i]; j++ ){
            if(item %j ===0){
                count++
            }
        }
        if(count===0){
            answer++
        }
        count=0;
    }
    
    return answer;
}

// 먼저 서로다른 3개의 수를 골라내는 배열을 완성
// 각 경우의 수의 합이 소수인지 판별
