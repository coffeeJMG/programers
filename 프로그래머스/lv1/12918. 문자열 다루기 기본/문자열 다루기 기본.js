function solution(s) {
    var answer = true;
    let count =0;
    s= s.split("")
   
        if(s.length ===6 || s.length===4){
            
            for(i=0; i<s.length; i++){
                let item=s[i];
                if(item.charCodeAt()>64 && item.charCodeAt()<123){
                    count ++
                }
            }
        }else{
            return false;
        }
    
     if(count >0){
         answer =false;
     }
           
      return answer;
}

// if문 조건 1. 길이가 4  2. 길이가 6 3. 값이 0~9인지 , for문 실패
// 두번 째 방법 s 배열에서 숫자만 새로운 배열에 넣고 해당 