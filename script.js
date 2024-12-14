const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");


const startButton =  document.getElementById("startBtn");
const stoptButton =  document.getElementById("stoptBtn");
const pauseButton =  document.getElementById("pauseBtn");
const resetButton =  document.getElementById("resetBtn");

const LapList = document.getElementById("laplist");


/// stopwatch varibles
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervel;

startButton.addEventListener('click', startTimer);
stoptButton.addEventListener('click', stopTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);


function startTimer(){
    intervel= setInterval(updateTimer,10);
    startButton.disabled = true;
}
function stopTimer(){
    clearInterval(intervel);
    addToLapList();
    resetTimerData();
    startButton.disabled = false;

 
}
function pauseTimer(){
    clearInterval(intervel);  
    startButton.disabled = false;

}
function resetTimer(){
    clearInterval(intervel);
    resetTimerData();
    startButton.disabled = false;

}

 function updateTimer(){
    milliseconds++;
    if (milliseconds === 100 ){
        milliseconds = 0;
        seconds++;
        if(seconds === 60){
            seconds = 0;
            minutes++
        }
    }
    displayTimer();
 }

 function displayTimer(){
    millisecondsLabel.textContent = padTime(milliseconds);
    secondsLabel.textContent = padTime(seconds);
    minutesLabel.textContent = padTime(minutes);
 }

 function padTime(time){
    return time.toString().padStart(2,'0');
 }

 function resetTimerData(){
    minutes= 0;
    seconds = 0;
    milliseconds = 0;
    displayTimer();

 }
 function addToLapList(){
    const lapTime = `${padTime(minutes)}: ${padTime(seconds)}: ${padTime(milliseconds)}`;
    
    const listItem = document.createElement('li')
    listItem.innerHTML = `<span>Lap ${LapList.childElementCount + 1} : </span> ${lapTime}`;  
    LapList.appendChild(listItem)
}   