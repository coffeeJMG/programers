let count = {}

function solution(nums) {
    var answer = 0;
    let select = nums.length/2
    let isCount = 0;
    
    for(let i=0; i<nums.length; i++){
        
            let item = nums[i]
            
            if(count[item]){
                
                count[item]+=1
            }else if(!count[item]){
                
                count[item] =1;
                isCount ++
            }
        
        
    }
    
    
    if(isCount > select){
        answer = select
    }else {
        
        answer = isCount
    }
    
    return answer;
}


// 골라야 하는 포켓몬의 수 select = nunms/2
// 숫자가 등장한 횟수 추가
// 1이 상인 숫자의 수가 nums보다 크면 result = nums
// 1이상인 숫자가 nums 보다 작으면 1이상인 숫자의 횟수 

// isCount > select answer = select
// isCount < select answer = isCount
