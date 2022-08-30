myitem = document.getElementById("firsttest");
//we asked html document for item with id "firsttest" and then we stored it in myitem//
myitem.addEventListener("click", onClick);
//added event listener to change behavior when text is clicked
function onClick() {
    myitem.style.color="green";
    myitem.style.backgroundColor="aliceblue";
}   
//we've decided to change the text style (color) to green when it is clicked on