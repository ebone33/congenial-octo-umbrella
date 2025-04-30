// When you click on the search button a message appears//
document.getElementById("searchbutton").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("searchbutton").innerHTML = "Go to www.chewy.com!";
}

//the buttons on the dog and cats pages change color when you click them//

const button = document.querySelector("add");

button.addEventListener("click", function () {
        button.style.color = "green";
    });

//Validate that text has been entered into the search bar//

function validateForm() {
    let x = document.forms["search bar"].value;
    if (x == "") {
      alert("Please enter text.");
      return false;
    }
  }