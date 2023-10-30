function solution(s) {
    var answer = '';
    
    // 배열로 반환
    s= s.split(" ")
    
    for(let i=0; i<s.length; i++){
      
        
        // 배열을 순회하며 각 요소의 첫번째 인덱스를 대문자 변환
        // 원본 배열의 1번째 요소를 소문자 변환하고 잘라내서 더해준다
        s[i]= s[i].charAt(0).toUpperCase()+s[i].slice(1).toLowerCase()
        
    }
    
      
    return s.join(" ")
}