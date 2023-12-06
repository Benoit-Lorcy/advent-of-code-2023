input = `Time:        55     82     64     90
Distance:   246   1441   1012   1111`

let [time, dist] = input.split("\n").map(e => e.match(/\d+/gm).map(f => +f));
time = [+time.join("")]
dist = [+dist.join("")]
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