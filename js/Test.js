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
// If the node is an element like <div> or <p>, the number is 1. If it's a text node,
// the number is 3.
function checkNodeType() {
    // var nType = document.childNodes[0].childNodes[1].childNodes[0];
    // console.log(nType.innerHTML);

    var d = document.getElementById("humpty");
    var pCounter = 0;
    for (var i = 0; i < d.childNodes.length; i++) {
        if (d.childNodes[i].nodeType === 1 ) {
            pCounter++;
        }
        if (pCounter === 2) {
            d.childNodes[i].innerHTML = "All his men.";
            break;
        }
    }
}

// Creating property plan1
var plan1 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: {}
};


function hostingPlan() {
    plan1.discountMonths = [6, 7, 11];
    document.write(plan1.discountMonths.toString());
    document.write("<br>" + plan1.discountMonths[2]);

    plan1.market = "regional";
    document.write("<br>" + plan1.market);

    document.write("<br><br>");

    plan1.market = undefined;
    document.write("<br>" + plan1.market);

    // You can delete a property of an object.
        delete plan1.market;
    document.write("<br>" + plan1.market);

    // You can check to see if a property of an object exists. true or false
    var propertyExists = "market" in plan1;
    document.write("<br>" + propertyExists);

    propertyExists = "name" in plan1;
    document.write("<br>" + propertyExists);
}

// Creating property plan2
var plan2 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7]
};


function calcAnnual() {
    var bestPrice = plan2.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < plan2.discountMonths.length; i++) {
        if (plan2.discountMonths[i] === thisMo) {
            bestPrice = plan2.price * .8;
            break;
        }
    }
    return bestPrice * 12;
}

function writeAnnualPrice() {
    document.write("<br>");
    document.write(calcAnnual());
}

// Defining method
var plan11 = {
    name: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [6, 7],
    calcAnnual: function(percentIfDisc) {
        // A better approach, for reasons that will become clear in subsequent chapters, is to
        // replace the name of the object(||plan3||) with the keyword ||this||. When JavaScript sees this keyword, it
        // knows you're referring to the object that's being defined.
        var bestPrice = this.price;
        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    }
};
// When you write this.whatever, JavaScript is smart enough to understand that you're
// referring to a property of the object that's being defined—in this case, plan3.



// Defining constructor function
// Function Name is capitalized in this situation
function Plan11(name, price, space, transfer, pages) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
}

// This is the calling code that creates the object for the Basic plan.
    var plan4 = new Plan11("Basic", 3.99, 100, 1000, 10);
    var plan5 = new Plan11("Basic", 3.99, 100, 1000, 10);
    var plan6 = new Plan11("Premium", 5.99, 500, 5000, 50);
    var plan7 = new Plan11("Ultimate", 9.99, 2000, 20000, 500);


// In the following code, the constructor creates the same method for every object that is
// created, as it creates all the properties for each object.
function Plan12(name, price, space, transfer, pages, discountMonths) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.calcAnnual = function(percentIfDisc) {
        var bestPrice = this.price;

        var currDate = new Date();
        var thisMo = currDate.getMonth();
        for (var i = 0; i < this.discountMonths.length; i++) {
            if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDisc;
                break;
            }
        }
        return bestPrice * 12;
    };
}

//This is the code that calls the constructor function to create three new objects that
// correspond to the three hosting plans.
var p1 = new Plan12("Basic", 3.99, 100, 1000, 10, [6, 7]);
var p2 = new Plan12("Premium", 5.99, 500, 5000, 50, [6, 7, 11]);
var p3 = new Plan12("Ultimate", 9.99, 2000, 20000, 500, [6, 7]);

// Once the objects and their properties and method are created by the code above, this is
// the code that calls, for example, the method for the Premium plan.
    var annualPrice = p2.calcAnnual(.85);



