let startBtn = document.getElementById("start");
let watch = document.querySelector(".hello");
let stopBtn = document.querySelector("#stop");
let restartBtn = document.getElementById("restart");
let watchsecond = document.querySelector(".second");
let watchminute = document.querySelector(".minute");
startBtn.addEventListener('click', intervalstart, intervalstartminute, intervalstartsecond);
restartBtn.addEventListener("click", restart)
let interval;
let interval1;
let interval2;
let i = 0;
let x = 0;
let y = 0;
function restart(){
    i = 0;
    x = 0;
    y = 0;
}
function start(){
    i++;
    watch.innerText=i; 
    watchsecond.innerText=x;
    watchminute.innerText=y;
    if(i==100){
        i=0;
        x+=1;
    }
    if(x == 60){
        y+=1;
        x = 0;
    }
    if(y == 60){
        y = 0;
    }
}
function intervalstart(){
    interval = setInterval(start, 10)
}
function intervalstartsecond(){
    interval = setInterval(start, 100)
}
function intervalstartminute(){
    interval = setInterval(start, 6000)
}
stopBtn.addEventListener("click", stop);
function stop(){
    clearInterval(interval)
}
