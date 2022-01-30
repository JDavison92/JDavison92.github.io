let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Painting.jpg') {
      myImage.setAttribute('src','images/Painting2.0.jpg');
    } else {
      myImage.setAttribute('src','images/Painting.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Artwork by: ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Whats up ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }  