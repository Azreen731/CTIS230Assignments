myitem = document.getElementById("firsttest");
//we asked html document for item with id "firsttest" and then we stored it in myitem//
myitem.addEventListener("click", onClick);
//added event listener to change behavior when text is clicked
function onClick() {
    myitem.style.color="green";
    myitem.style.backgroundColor="aliceblue";
}   
//we've decided to change the text style (color) to green when it is clicked on

myitem.addEventListener("mouseout", onmouseout) ;

function onmouseout() {
    myitem.style.color="";
    myitem.style.backgroundColor="";
}

thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {
    otheritem.style.color = "gold";
    otheritem.style.backgroundColor = "ghostwhite";
}

offbutton = document.getElementById("offbutton");
oneitem = document.getElementById("buttonlight");
offbuton = document.addEventListener("click", onButtonClick);
function onButtonClick() {
    oneitem.style.color = "lightgrey";
}

textentry = document.getElementById("myinput");
textentry.addEventListener("change",onChange);
function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
}

//extra function

oneitem.addEventListener("click", onClick)
function onClick() {
    oneitem.style.color="blue";
}

