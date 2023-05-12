function solution(num_list) {
    var answer = 0;
        let count=1;
    for(i=0; i<num_list.length; i++){
          if(num_list.length >=11){
        answer +=num_list[i]
        
    }else{
         count*=num_list[i]
        answer=count
    }
    }
  
    
    return answer;
}