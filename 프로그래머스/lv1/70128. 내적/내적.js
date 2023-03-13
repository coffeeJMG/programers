function solution(a, b) {
    var answer = 0;
 
    for(i=0; i<a.length; i++){
        let item=a[i]*b[i]
        answer+= item
    }
    
    console.log(a[0]*b[0])
    return answer;
}


// for문 돌며 같은 인덱스 번호의 값 곱한 후 더하기