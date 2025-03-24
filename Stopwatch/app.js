    let stop = document.querySelector("#stop");
    let start = document.querySelector("#start");
    let reset = document.querySelector("#reset");
    let timer = document.querySelector("#timer-display");

    let msec = 0;
    let sec = 0;
    let mins = 0;

    let timerId = null;

    start.addEventListener("click",function(){
        if(timerId!==null){
            clearInterval(timerId);
        }
        console.log("Hello");
        
        timerId = setInterval(startTimer,10);
        console.log(timerId);
    })

    stop.addEventListener("click",function(){
        clearInterval(timerId);
    })

    reset.addEventListener("click",function(){
        clearInterval(timerId);
        msec=0;
        sec=0;
        mins=0;
        timer.innerHTML = `00:00:00`;
    })

    function startTimer(){
        msec++;
        if(msec === 100){
            msec = 0;
            sec++;
            if(sec === 60){
                sec = 0;
                mins++;
            }
        }

        let milliSec = msec<10 ? `0${msec}` : msec;
        let seconds = sec<10 ? `0${sec}` : sec;
        let minutes = mins<10 ? `0${mins}` : mins;

        timer.innerHTML = `${minutes}:${seconds}:${milliSec}`;

    }

