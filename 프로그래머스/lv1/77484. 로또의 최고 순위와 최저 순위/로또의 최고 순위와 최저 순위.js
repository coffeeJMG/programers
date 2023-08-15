function solution(lottos, win_nums) {
    var answer = [];
    let maxNum = 0;
    let minNum = 0;
    
    
    for(let i=0; i<win_nums.length; i++){
         let win = win_nums[i]
        for(let i=0; i<lottos.length; i++){
        let lotto = lottos[i];
        
        if(lotto !==0 && lotto === win){
            minNum ++
        }
    }
        
    }
   
    answer =[minNum,minNum]
    
    for(let i=0; i<lottos.length; i++){
        let lotto = lottos[i]
        if(lotto ===0){
            answer[0] +=1
        }
    }
   
   
    for(let i=0; i<answer.length; i++){
       
        if(answer[i] ===6){
            answer[i] = 1
        }else if(answer[i] ===5){
            answer[i] = 2
        }else if(answer[i] ===4){
            answer[i] =3
        }else if(answer[i] ===3){
            answer[i] =4
        }else if(answer[i] ===2){
            answer[i] =5
        }else{
            answer[i] =6
        }
    }
    return answer;
}