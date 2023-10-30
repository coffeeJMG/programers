function solution(A,B){
    var answer = 0;
    
    
    A = A.sort((a,b)=> a-b) // A를 작은 순서대로 정렬
    B = B.sort((a,b)=> b-a) // B를 큰 순서대로 정렬
    
    
    // 배열을 순회하며 각 항목을 더함 
    for(let i=0; i<A.length; i++){
        
        answer += A[i] * B[i]
       
    }
    

    return answer;
}


// A의 최솟값 순서 X B의 최댓값 순서 누적