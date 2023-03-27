function solution(nums) {
    var answer = 0;
    let pocketball =[];
    let count =0;
    
    
    for(i=0; i<nums.length; i++){
        
        let item= nums[i];
        
        if(pocketball.length < nums.length/2){
             for(j=0; j<pocketball.length; j++){
            if(item===pocketball[j]){
                count ++;
            
            }     
        }
        
        if(count===0 ){
            pocketball.push(item)
            
        }
        count=0;
       
        }
       
    }
    
    answer = pocketball.length
    return answer;
}


//가지고 갈 수 있는 포켓몬은 N/2 마리
//최대한 같은 종류는 피한다.
