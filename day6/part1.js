input = `Time:      7  15   30
Distance:  9  40  200`

let [time, dist] = input.split("\n").map(e => e.match(/\d+/gm).map(f => +f));
let res = 1;

for(let i = 0; i< time.length; i++){
    let temp = 0;
    for(let j = 0; j < time[i]; j++){
        if((time[i]-j)*j>dist[i]){
            temp++
        }
    }
    res *= temp;
}
console.log(res)