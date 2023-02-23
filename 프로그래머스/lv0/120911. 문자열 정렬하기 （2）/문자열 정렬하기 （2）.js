function solution(my_string) {
    let answer = '';

    my_string = my_string.toLowerCase().split("").sort().join("");
    answer+=my_string
    return answer;
}