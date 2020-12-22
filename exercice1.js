// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let minute = document.getElementById('minutes');
let timer = 0;
let minutes = 0;
let countUp = function() {
    let chrono = setTimeout(function (){
        if (timer < 60) {
            seconds.innerHTML = timer;
            timer++;
            countUp();
        }
        else if (timer === 60){
            minutes++;
            timer = 0;
            seconds.innerHTML = timer;
            minute.innerHTML = minutes;
            countUp();
        }
    }, 1000);

    document.getElementById('stop-button').addEventListener('click', function (){
        clearTimeout(chrono);
    })
};

countUp();

// How can you make it stop counting?
let stopCountUp = function() {
    clearTimeout(chrono);
};
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

