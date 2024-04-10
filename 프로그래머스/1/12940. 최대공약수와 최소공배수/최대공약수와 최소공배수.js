function gcd(a,b){
  	// b(나머지)가 0이면 a(직전 나머지)를 반환하고 탈출
	if(b === 0){
    	return a;
    }
  	// b를 a로 보내고 a % b를 나눈 나머지를 매개변수 b로 넣어서 재귀함수로써 호출
  	return gcd(b, a % b);
};

function solution(n, m) {
    var answer = [];
    
    if(n>m){
        answer.push(gcd(n,m))
        answer.push(n*m/gcd(n,m))
        
    }else if(m>n){
        answer.push(gcd(m,n))
        answer.push(n*m/gcd(m,n))
    }
    
    
    return answer;
}