var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');
var $ol         = document.querySelector("ol");

function printTime() {
        printMinutes()
        printSeconds()
        // printMilliseconds()   
}
function printMinutes() {
    let minutes =chronometer.getMinutes();
    minutes = chronometer.twoDigitsNumber(minutes);
    minDec.innerHTML=minutes[0];
    minUni.innerHTML=minutes[1];
}

function printSeconds() {
    let seconds =chronometer.getSeconds();
    seconds = chronometer.twoDigitsNumber(seconds);
    secDec.innerHTML=seconds[0];
    secUni.innerHTML=seconds[1];
}
// function printMilliseconds() {
// }
function printSplit() {
    let $li = document.createElement("li");
    let minutes =chronometer.getMinutes();
    minutes = chronometer.twoDigitsNumber(minutes);
    let seconds =chronometer.getSeconds();
    seconds = chronometer.twoDigitsNumber(seconds);
    $li.innerHTML = `${minutes}:${seconds}`
    $ol.appendChild($li);
}
function clearSplits() {
    $ol.innerHTML = "";
}
function setStopBtn() {
    btnLeft.innerHTML="STOP"
    btnLeft.setAttribute("class","btn stop")
}
function setSplitBtn() {
btnRight.innerHTML="SPLIT"
btnRight.setAttribute("class","btn split")
}
function setStartBtn() {
btnLeft.innerHTML="START"
btnLeft.setAttribute("class","btn start")
}
function setResetBtn() {
btnRight.innerHTML="RESET"
btnRight.setAttribute("class","btn reset")
}
// Start/Stop Button
btnLeft.addEventListener('click', function () {
    
if(btnLeft.innerHTML==="START"){

//    printTime()
    setStopBtn();
    setSplitBtn();
    chronometer.startClick()
    }
    else if (btnLeft.innerHTML==="STOP"){ 
        setStartBtn();
        setResetBtn();
        chronometer.stopClick()
    }
});
// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML === "RESET"){
        chronometer.resetClick();
        clearSplits();
    }else if (btnRight.innerHTML === "SPLIT"){
        printSplit();
    }
});
let newint=setInterval(() => {
    printTime()
}, 100);

// var btnLeft     = document.getElementById('btnLeft');
// var btnRight    = document.getElementById('btnRight');
// var minDec      = document.getElementById('minDec');
// var minUni      = document.getElementById('minUni');
// var secDec      = document.getElementById('secDec');
// var secUni      = document.getElementById('secUni');
// var milDec      = document.getElementById('milDec');
// var milUni      = document.getElementById('milUni');