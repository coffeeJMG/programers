function solution(sizes) {
    
    let answer = 0;
    let w = [];
    let h = [];
    let num=0;   
    for(i=0; i<sizes.length; i++){
        w.push(sizes[i][0]);
        h.push(sizes[i][1]);
        
    }
    
    for(i=0; i<w.length; i++){
        if(w[i]>h[i]){
             num=w[i];
             w[i]=h[i];
             h[i]=num;
        }
    }
    
    w=w.sort((a,b)=>a-b);
    h=h.sort((a,b)=>a-b);
    
    
    return w[w.length-1]*h[h.length-1]
}

  //   1. 각 배열의 [0],[1] 인덱스의 최댓값을 각각 구한다.
  //   2. [0].[1] 의 최댓값 중 반대편인덱스의 최댓값을 
  //  가장 최소로 만들 수 있는 경의 수를 구한다.
  //  반대 배열의 가장 큰 값을 0으로 만들면서 최댓값 배열의 최소 숫자보다 
  //  작거나 같으면 각 배열의 최댓값을 곱한다.

