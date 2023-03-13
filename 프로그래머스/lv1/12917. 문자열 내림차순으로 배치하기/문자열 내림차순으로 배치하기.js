function solution(s) {
    
    s=s.split('')
    
    s=s.sort((a,b)=> b.charCodeAt()-a.charCodeAt())
    
    return s.join('');
}

// 아스키 코드 작은순으로 문자를 재배열