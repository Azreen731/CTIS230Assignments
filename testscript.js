function onClick() {
    onClick1();
    onClick2();
}

myitem = document.getElementById("firsttest");
//we asked html document for item with id "firsttest" and then we stored it in myitem//
myitem.addEventListener("click", onClick1);
//added event listener to change behavior when text is clicked
function onClick1() {
    myitem.style.color="green";
    myitem.style.backgroundColor="aliceblue";
} 
myitem.addEventListener("mouseout", onmouseout) ;

function onmouseout() {
    myitem.style.color="";
    myitem.style.backgroundColor="";
}   
//we've decided to change the text style (color) to green when it is clicked on

//extra function
 thing = document.getElementById("judge");
 thing.addEventListener("click", onClick2)
 function onClick2() {
     thing.style.color="blue";
 }


function onButtonClick() {
     onButtonClick1();
     onButtonClick2();
 }

 thebutton = document.getElementById("thebutton");
 otheritem = document.getElementById("buttontest");

 thebutton.addEventListener("click", onButtonClick1);
 
 function onButtonClick1() {
     otheritem.style.color = "gold";
     otheritem.style.backgroundColor = "ghostwhite";
 }
 thebutton2 = document.getElementById("thebutton2");
 lastitem = document.getElementById("buttontest2");

 thebutton2.addEventListener("click", onButtonClick2);
 
 function onButtonClick2() {
     lastitem.style.color = "lightgrey";
 }

 textentry = document.getElementById("myinput");
 textentry.addEventListener("change", onChange);

 function onChange() {
    newtext = myinput.value;
    otheritem.innerHTML = newtext;
 }
 mybigimage = document.getElementById("largeview");
 image4 = document.getElementById("image4");

//make something happen when we click on them

image4.addEventListener("click",makeBigImage);
mybigimage.addEventListener("click", hideBigImage);

function makeBigImage() {
    // first be sure that the largeview element has no leftover HTML
    mybigimage.innerHTML = '';
    //add an img element as a child of this largeview element
    bigimage = document.createElement("img");
    bigimage.src ="images/dead_sea.jpg";
    mybigimage.appendChild(bigimage);
    mybigimage.classList.remove("dontshow");
}

