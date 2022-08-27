// Step 0: What do we want to do? Change color,text size, and content when user moves the mouse over it,
// and change it back when user moves off the text

//Step 1: Get the element that we want to affect and store it away so that we're ready to respond to the event

ourText = document.getElementById("newtext");

//This code asks the document for the element that has id newtext and stores the response in something named ourText

//Step 2:We want to tell ourText to change when mouse moves over it, so we attach an event listener named onMouseOver
// to ourText

ourText.addEventListener("mouseover", onMouseOver);
//Here's our event listener
function onMouseOver() {
 ourText.style.color = "green"; 
ourText.style.fontSize = "3em";
  ourText.innerHTML = "And we changed the text";
}

//Need another event listener to respond to the mouse moving off
ourText.addEventListener("mouseout", onmouseout);
function onmouseout() {
  ourText.style.color="black";
  ourText.style.fontSize = "1em"; //This is standard font size
  ourText.innerHTML = "<strong>And we changed it back</strong>";
}
//Get the button labled with the id mybutton and store it away
ourButton= document.getElementById("mybutton");
//Tell the button which event listener is attafched to it when the user clicks on it
ourButton.addEventListener("click", onClick);
//Write the event handler
function OnClick() {
    ourText.innerHTML = "I clicked the button";
    ourText.style.fontSize="2em";
    myCard.style.display = "block"; //now make the image appear by changing display from "none" to "block"

}
myCard = document.getElementById("card"); //get the div that holds the card image


//Get the textfield within the id myinput
ourInput = document.getElementById("my input"); //This contains the new text
ourHeading = document.getElementById("header"); //What we're going to modify

//Tell the textfield what event listener is connected to its events

ourInput.addEventListener("change", changeText); //The text in the field changes
ourInput.addEventListener("blur", changeText); //The text field loses focus
// when we click out of it, the text field loses focus, and that generates a blur event

function changeText() {
  //Get the text that the user entered
  newtext = ourInput.value; //we ask ourInput for its value, which is the entered text
  myheading.innerHTML = newtext;
}

myCardImage = document.getElementById("cardimage");
myCard.addEventListener("click", changeImage);
function changeImage() {
  if (myCard.style.position == "") {
    
  }
  myCard.style.position("absolute"); //make the position of the div absolute and 100px from the top left corner
  myCard.style.top("100px");
  myCard.style.left("100px");
  myCardImage.style.width("80px"); // make the width of the image 80px
  // not the width of the div bc that won't affect how wide the image is
  myCardImage.src="images/2_of_diamonds.png";
}



