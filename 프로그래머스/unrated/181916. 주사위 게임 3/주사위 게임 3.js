function solution(a, b, c, d) {
    var answer = 0;
    
    if(a==b && c==d && a==c){             // 모두 같은 경우
        answer = 1111*a
    } 
    
    if(a==b && c==d && a !==c && a !==d){         // 2가지 같은경우 (a,b)
        answer = (a+d) * Math.abs(a-d) 
    }else if(a==c && b==d && a !==b && a !==d){   // 2가지 같은경우 (a,c)
        answer = (a+d) * Math.abs(a-d) 
    }else if(a==d && b==c && a !==c && a !==b){   // 2가지 같은경우 (a,d)
        answer = (a+b) * Math.abs(a-b) 
    }
    
    if(a==b && a!==c && a!==d && c!==d){   // 2가지가 같고 나머지 2개가 다른경우 (a==b,c,d)
        answer = c*d
    }else if(a==c && a!==b && a!==d && b!==d){   // 2가지가 같고 나머지 2개가 다른경우 (a==c,b,d)
        answer = b*d
    }else if(a==d && a!==b && a!==c && b!==c){   // 2가지가 같고 나머지 2개가 다른경우 (a==d,b,c)
        answer = b*c
    }else if(b==c && b!==a && b!==d && a!==d){   // 2가지가 같고 나머지 2개가 다른경우 (b==c,a,d)
        answer = a*d
    }else if(b==d && b!==a && b!==c && a!==c){   // 2가지가 같고 나머지 2개가 다른경우 (b==d,a,c)
        answer = a*c
    }else if(c==d && c!==a && c!==b && a!==b){   // 2가지가 같고 나머지 2개가 다른경우 (c==d,a,b)
        answer = a*b
    }
    
    
    if(a==b && b==c && c!==d){            // 1가지만 다른 경우 (d)
        answer = (10*a+d) *(10*a+d)
    } else if(a==b && b!==c && b==d){     // 1가지만 다른 경우 (c)
        answer = (10*a+c) *(10*a+c)
    }else  if(a!==b && b==c && c==d){     // 1가지만 다른 경우 (a)
        answer = (10*d+a) *(10*d+a)
    }else  if(a!==b && a==c && c==d){     // 1가지만 다른 경우 (b)
        answer = (10*a+b) *(10*a+b)
    }
    
    if(a!==b && a!==c && a!==d && b!==c && b!==d && c!==d){
        answer = Math.min(a,b,c,d)
    }
    
 
    return answer;
}