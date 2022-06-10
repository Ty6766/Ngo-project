var dataset = ["Putting Smiles On People's Faces is Sidikatu Abeni Foundation's first call"];
var datasetIndex = 0;
var data;
var pause = 2000;
var addTime = 200;
var removeTime = 150;
var letterIndex = 0;
var currentInterval;

var autoType = document.getElementById("autoType");

function textRotation() {
    if (datasetIndex == dataset.length) {
        datasetIndex = 0;
    };

    data = dataset[datasetIndex];
    letterIndex = 0;
    autoType.className = "";
    currentInterval = window.setInterval(addLetter, addTime);
};

function addLetter() {
    autoType.innerHTML += data.charAt(letterIndex);
    letterIndex += 1;

    if (letterIndex > data.length) {
        autoType.className = "caretAnimation";
        window.clearInterval(currentInterval);
        window.setTimeout(startRemove, pause);
    };
};

// function startRemove() {
//     currentInterval = window.setInterval(removeLetter, removeTime);
// }

// function removeLetter() {
//     var currentString = autoType.innerHTML;
//     autoType.innerHTML = currentString.slice(0, -1);

//     if (currentString.length < 1) {
//         window.clearInterval(currentInterval);
//         datasetIndex += 1;
//         textRotation();
//     };
// };

window.onload = window.setTimeout(textRotation, 500);