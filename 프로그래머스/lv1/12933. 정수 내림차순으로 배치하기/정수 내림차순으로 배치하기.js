function solution(n) {
    var answer = '';
    
   let minNum =10;
    let newArray=[];
    n=String(n).split("");    // n 을 배열로 만든다.
    
    n = n.sort((a,b)=>b.charCodeAt()-a.charCodeAt())
   
    for(i=0; i<n.length; i++){
        answer+=(Number(n[i]))
    }
    
    
    return Number(answer)
}
        
// 1. 정수를 자리수 마다 끊어서 배열로 만든다 . 
// 2. for문으로 최솟값 인덱스를 정답 배열로 보낸다. 
// 3. 해당 인덱스를 값을 변경해서 다음 포문에서 잡히지 않게한다