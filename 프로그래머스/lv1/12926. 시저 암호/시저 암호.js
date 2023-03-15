function solution(s, n) {
    var answer = '';
    
    
    for(i=0; i<s.length; i++){
        let code = s.charCodeAt(i)
      
        if(code===32){                         // 공백은 그대로 공백을 더한다.
            answer += String.fromCharCode(code);
        }else if(code+n >122){                          // z에서 1바퀴 도는경우
            answer +=String.fromCharCode(code+n-26)     // 
        }else if(code+n>90 &&(code>64 && code<91) ){    // Z 에서 1바퀴 도는경우
            answer +=String.fromCharCode(code-26+n%26)  
        }else{
            answer += String.fromCharCode(code+n);      // a~z사이에서 증가하는 경우  
        }
        
 }
       

    
  
  
     return answer;
}



// code 에 s[i] 번째의 아스키코드 값을 저장
// 번호 32 공백이면 그대로 공백 출력
// z,Z는 a,A 로 돌아와야함.
//