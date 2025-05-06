// When you click on the search button a message appears//
document.getElementById("searchbutton").addEventListener("click", function(){alert ("Go to www.chewy.com!");
});

//the buttons on the dog and cats pages change color when you click them//
const myButton = document.getElementById("add");
myButton.addEventListener("click", function() {
  this.style.backgroundColor = "green";
});

//Validate that text has been entered into the search bar - this does not work because I have the alert above//

function validateForm() {
    let x = document.forms["search bar"]["text"].value;
    if (x == "") {
      alert("Please enter text.");
      return false;
    }
  }