function solution(numbers) {
    var answer = -1;
    
    let list = [0,1,2,3,4,5,6,7,8,9];
    
    // numbers 배열에 없는 숫자를 찾기
    let result = list.filter(num => !numbers.includes(num));
    
    console.log(result);
    
    
    return result.reduce((a,b) => a+b)
}