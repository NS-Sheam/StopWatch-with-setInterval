let min = 0;
let sec = 0;
let miliSec = 0;
let hour = 0;
const minuteArea = document.getElementById('minute');
const secondArea = document.getElementById('second');
const miliSecondArea = document.getElementById('mili-second');
const hourArea = document.getElementById('hour');
let x = 0;
function StartTimer() {
    const intervalId = setInterval(() => {
        miliSec++;
        miliSecondArea.innerText = miliSec;
        if (miliSec === 100) {
            miliSec = 0;
            sec++;
            secondArea.innerText = sec;
            if (sec < 10) {
                secondArea.innerText = "0" + sec;
            }
        };
        if (sec === 60) {
            sec = 0;
            min++;
            minuteArea.innerText = min;
            if (min < 10) {
                minuteArea.innerText = "0" + min;
            }

        };
        if (min === 60) {
            min = 0;
        }
        document.getElementById('stop-btn').addEventListener('click', function () {
            clearInterval(intervalId);
        });
        document.getElementById('reset-btn').addEventListener('click', function () {
            clearInterval(intervalId);
            hourArea.innerText = minuteArea.innerText = secondArea.innerText = miliSecondArea.innerText = '00';
        })
    }, 10);
};

