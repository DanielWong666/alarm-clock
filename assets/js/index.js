'use strict';



const currentTime = document.querySelector('.current-time');
const alarm = document.querySelector('.alarm');
const hourInput = document.querySelector('.hour-input');
const minInput = document.querySelector('.min-input');
const setButton = document.querySelector('button');
const alarmIcon = document.querySelector('.fa-solid');
const errorMessage = document.querySelector('.error-message');
const alarmSound = new Audio('assets/audio/alarm.mp3');
alarmSound.type = 'audio/mp3';



// Current Time
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    currentTime.innerText = `${hours}:${minutes}:${seconds}`;

    triggerAlarm(`${hours}:${minutes}`);
}

setInterval(updateTime, 1000);

updateTime();

// Set Alarm Clock
hourInput.addEventListener('input', function () {
    if (hourInput.value >= 0 && hourInput.value < 24 && hourInput.value !== '') {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'inline';
    }
});

minInput.addEventListener('input', function () {
    if (minInput.value >= 0 && minInput.value < 60 && minInput.value !== '') {
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'inline';
    }
});

setButton.addEventListener('click', function() {
    const hourAlarm = hourInput.value.toString().padStart(2, '0'); 
    const minuteAlarm = minInput.value.toString().padStart(2, '0'); 

    if (minInput.value >= 0 && minInput.value < 60 && minInput.value !== '' && 
    hourInput.value >= 0 && hourInput.value < 24 && hourInput.value !== '') {
        errorMessage.style.display = 'none';
        alarm.innerText = `${hourAlarm}:${minuteAlarm}`;
        alarmIcon.style.display = 'inline';
        minInput.value = '';
        hourInput.value = '';
    } else {
        errorMessage.style.display = 'inline';
    }
});

// Alarm Sound
function triggerAlarm(currentTimeStr) {
    if (alarm.innerText === currentTimeStr) {
        alarmSound.play();
    }
}