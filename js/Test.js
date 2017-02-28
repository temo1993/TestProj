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

// Getting all elements o the page by id and tag name
function getElement() {
    var div = document.getElementById("textDiv");
    var paragraph = div.getElementsByTagName("p");
    var div2 = document.getElementById("textDiv2");
    for (var x = 0; x < paragraph.length; x++){
        div2.innerHTML += paragraph[x].innerHTML + "<br>";
        console.log(div2.innerHTML);
        console.log(div2);
        console.log(paragraph[x]);
    }
}

// Manage html page via dom hierarchy
function manageViaDOM() {
    // Displaying text : <p>This is text for test 2</p> from third.html
    document.getElementById("div3").innerHTML = document.getElementById("textDiv").childNodes[3].innerHTML;
}

// Checking a node to see what type it is—element, text, comment,
function checkNodeType() {
    var nType = document.childNodes[0].childNodes[1].childNodes[0].innerHTML;
    console.log(nType);
}

















