function solution(phone_number) {
    var answer = '';
    
    for(i=0 ; i<phone_number.length; i++){
        
        if(i < phone_number.length-4){      // 뒷자리 5번째까지는 안보이게 출력
            answer+='*'
        }else{
            answer+=phone_number[i]         // 4번쨰 자리부터는 번호 출력 
        }
    }
    return answer;
}


// 문자열을 돌면서 길이 -4까지는 * 추가
// -4부터는 해당 인덱스 추가