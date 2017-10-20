function changeBackground(boxID, color) {
    var inputBox = document.getElementById(boxID);
    inputBox.style.backgroundColor = color;
    
    if (color == "white") {
        inputBox.style.color = "black";
    } else {
        inputBox.style.color = "white";
    }
}




function checkName() {

    var name = document.getElementById("name");
    var nameText = name.value;

    var regEx = new RegExp(/^[a-zA-Z\s]*$/);

    if (!regEx.test(nameText)) {
        changeBackground("name", "red");
    } else {
        changeBackground("name", "white");
    }


}
function validate() {
    if(checkEmail() == true) {
        myAjaxFunction();
    } else {
        alert("Subscription could not be processed. Please check your information.");
    }
}

function checkEmail() {
    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("email");
    var emailText = email.value;
    var result = false;

    if (!regEx.test(emailText)) {
        changeBackground("email", "red");
        
    } else {

        changeBackground("email", "white");
        result = true;
    }
    return result;
}

function checkAge() {
    var regEx = new RegExp(/^[0-9]*$/);
    var age = document.getElementById("age");
    var ageText = age.value;


    if (!regEx.test(ageText) || ageText.length > 3) {
        changeBackground("age", "red");
    } else {

        changeBackground("age", "white");
    }


}


function myAjaxFunction() {
    alert("Your subscription has been processed successfully!");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("age").value = "";
}