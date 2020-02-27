var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime() {
        printMinutes()
        printSeconds();
        // printSplit();

}

function printMinutes() {
    
    let mnts = chronometer.getMinutes();
    let minutes1dig = chronometer.twoDigitsNumber(mnts);
    minDec.innerHTML= minutes1dig[0];
    minUni.innerHTML = minutes1dig[1];
}

function printSeconds() {
    
    let scnd = chronometer.getSeconds();
    let seconds = chronometer.twoDigitsNumber(scnd);
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds() {

}

function printSplit() {

}

function clearSplits() {

}

function setStopBtn() {
    btnLeft.innerHTML = "STOP"
    btnLeft.setAttribute("class", "btn stop");
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.setAttribute("class", "btn split");
}

function setStartBtn() {
    btnLeft.innerHTML= "START";
    btnLeft.setAttribute("class", "btn start");
}

function setResetBtn() {
    btnRight.innerHTML= "RESET";
    btnRight.setAttribute("class", "btn reset");
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if (btnLeft.innerHTML === "START"){
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
        printTime()
        
    } else if(btnLeft.innerHTML === "STOP"){
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }
});

// Reset/Split Button
btnRight.addEventListener('click', function () {
    if(btnRight.innerHTML === "RESET"){
        chronometer.resetClick();
    }
});
