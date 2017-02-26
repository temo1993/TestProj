function sayHello() {
    alert("Hi");
}

function sayBye() {
    alert("Bye");
}

function checkAddress(fieldId) {
    if (document.getElementById(fieldId).value === "") {
        alert("Email address required.");
    }
}

function fillCity() {
    var cityName;
    var zipEntered = document.getElementById("zip").value;
    switch (zipEntered) {
        case "60608" :
            cityName = "Chicago";
            break;
        case "68114" :
            cityName = "Omaha";
            break;
        case "53212" :
            cityName = "Milwaukee";
            break;
        default: cityName = "";
    }
    document.getElementById("city").value = cityName;
}


function expandLoris() {
    document.getElementById("slowLoris").innerHTML = "Slow lorises are a group of several species of trepsirrhine primates " +
        "which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, " +
        "and a variety of distinctive coloration patterns that are species-dependent. The hands " +
        "and feet of slow lorises have several adaptations that give them a pincer-like grip " +
        "and enable them to grasp branches for long periods of time. " +
        "Slow lorises have a toxic bite, a rare trait among mammals."
}

function placeAList() {
    document.getElementById("lorisList").innerHTML =
        "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
}

function peekAtContent() {
    document.getElementById("thisIsEffect").innerHTML = document.getElementById("content").innerHTML;
}

function makeInvisible() {
    // Assigning a class to an element this way replaces any classes that the element has been
    // assigned in the static markup.
    document.getElementById("beautiful").className = "hidden";
}

function makeBig() {
    // If you want to add a class to an element, preserving its existing classes, you can do it.
    document.getElementById("p1").className += " big";
}

function swapPic(eId, newPic) {
    document.getElementById(eId).src = newPic;
}
























