function solution(str1, str2) {
    
    let answer =2;
    
    for(i=0; i<str1.length; i++){
       
            if(str1[i] ===str2[0]){
              for(j=0; j<str2.length; j++){
                if(str1[i+j] !== str2[j]) {
                     answer = 2;
                     break;
                }
                if(j == str2.length-1){
                    answer = 1;
                }
              }
         }
            if(answer == 1){    
                break;
             }
        }
    return answer
 } 
         
   