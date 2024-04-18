function solution(sizes) {
    var answer = 0;
    let w =0;
    let h =0;
    
    
    
    for(let i=0; i<sizes.length; i++){
        
        sizes[i].sort((a,b)=>a-b)
        
        if(sizes[i][0]>w){
            
            w= sizes[i][0]
        }
        if(sizes[i][1]>h){
            
            h= sizes[i][1]
        }
        
    }
    
    console.log(sizes)
    
    return w*h
}