var text = document.getElementById("input");

function setup(){
    synth = window.speechSynthesis;
}

function Hello(){
    var utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
}

