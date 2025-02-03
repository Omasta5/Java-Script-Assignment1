// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

var page = document.querySelector('html');

// Constants for main button query selectors
var nounOne = document.querySelector('#noun1');
var verb = document.querySelector('#verb');
var adjective = document.querySelector('#adjective');
var nounTwo = document.querySelector('#noun2');
var setting = document.querySelector('#setting');

// Constants for p tag to display query selectors
var nounOneText = document.querySelector('#choosenNoun1');
var verbText = document.querySelector('#choosenVerb');
var adjectiveText = document.querySelector('#choosenAdjective');
var nounTwoText = document.querySelector('#choosenNoun2');
var settingText = document.querySelector('#choosenSetting');

// Constants for final buttons and p tags
var playback = document.querySelector('#playback');
var random = document.querySelector('#random');
var fullStory = document.querySelector('#story');

// Variables for pre-defined arrays
var nounOneOptions = ["My Mom", "My Dad", "The cat", "The dog", "The owl", "My principal", "The President"];
var verbOptions = ["ate", "saw", "smooched", "loves", "sat on", "danced with", "scarred"];
var adjectiveOptions = ["a scary", "a funny", "a huge", "a gross", "a loud", "a silent"];
var nounTwoOptions = ["penguin", "crocodile", "dragon", "reindeer", "bug", "zombie", "vampire"];
var settingOptions = ["in the living room", "in the large castle", "in outer space", "outside the school", "in my socks"];

// Variables for count to grab array elements
var nounOneCount = 0;
var verbCount = 0;
var adjectiveCount = 0;
var nounTwoCount = 0;
var settingCount = 0;

//Variable for the studentID id
var studentId = document.querySelector('#studentId');

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    var nounOneSelect = nounOneOptions[nounOneCount]; //Will get an array element based on the current nounOne count
    nounOneText.textContent = nounOneSelect; //This variable that stores nounOne's p tag is updated to the current array element selected
    studentId.textContent = "Owen DeHaan | ID: 1189401"; //Will display my student name and ID
    page.style.backgroundColor = "Yellow"; //Will change the page's backgorund color to represent the current variable
    // if-else to change count setting
    if (nounOneCount < nounOneOptions.length){ //Will check through to make sure the count hasn't extended past the length of the array
        nounOneCount++; //Moves the count up once, switching to the next nounOne
    } else{ //If every option has been went through, will reset the index back to 0, restarting it
        nounOneCount= 0;
    }
}
//Each of the following functions will do the same, just for their respective variables

function verb_on_click() {
    // variable to get array element and displaying it
    var verbSelect = verbOptions[verbCount]; 
    verbText.textContent = verbSelect; 
    studentId.textContent = "Owen DeHaan | ID: 1189401"; 
    page.style.backgroundColor = "Orange"; //Will change the page's backgorund color to represent the current variable
    // if-else to change count setting
    if (verbCount < verbOptions.length){
        verbCount++; 
    } else{
        verbCount= 0;
    }
}

function adjective_on_click() {
    // variable to get array element and displaying it
    var adjectiveSelect = adjectiveOptions[adjectiveCount]; 
    adjectiveText.textContent = adjectiveSelect; 
    studentId.textContent = "Owen DeHaan | ID: 1189401"; 
    page.style.backgroundColor = "Green"; //Will change the page's backgorund color to represent the current variable
    // if-else to change count setting
    if (adjectiveCount < adjectiveOptions.length){
        adjectiveCount++; 
    } else{
        adjectiveCount= 0;
    }
}

function noun2_on_click() {
    // variable to get array element and displaying it
    var nounTwoSelect = nounTwoOptions[nounTwoCount]; 
    nounTwoText.textContent = nounTwoSelect; 
    studentId.textContent = "Owen DeHaan | ID: 1189401"; 
    page.style.backgroundColor = "Blue"; //Will change the page's backgorund color to represent the current variable
    // if-else to change count setting
    if (nounTwoCount < nounTwoOptions.length){
        nounTwoCount++; 
    } else{
        nounTwoCount= 0;
    }
}

function setting_on_click() {
    // variable to get array element and displaying it
    var settingSelect = settingOptions[settingCount]; 
    settingText.textContent = settingSelect; 
    studentId.textContent = "Owen DeHaan | ID: 1189401"; 
    page.style.backgroundColor = "LightBlue"; //Will change the page's backgorund color to represent the current variable
    // if-else to change count setting
    if (settingCount < settingOptions.length){
        settingCount++; 
    } else{
        settingCount= 0;
    }
}

// concatenate the user story and display
function playback_on_click() {
    page.style.backgroundColor = "Violet";
    fullStory.textContent = nounOneText.textContent + " " + verbText.textContent + " " + adjectiveText.textContent + " " + nounTwoText.textContent + " " + settingText.textContent;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    page.style.backgroundColor = "Grey";
    nounOneText.textContent = nounOneOptions[Math.floor(Math.random() * nounOneOptions.length)]; //Will get a random number using both math floor and math random, and save that corisponding variable to nounOne
    verbText.textContent = verbOptions[Math.floor(Math.random() * verbOptions.length)]; //Will get a random number using both math floor and math random, and save that corisponding variable to verb
    adjectiveText.textContent = adjectiveOptions[Math.floor(Math.random() * adjectiveOptions.length)]; //Will get a random number using both math floor and math random, and save that corisponding variable to adjective
    nounTwoText.textContent = nounTwoOptions[Math.floor(Math.random() * nounTwoOptions.length)]; //Will get a random number using both math floor and math random, and save that corisponding variable to nounTwo
    settingText.textContent = settingOptions[Math.floor(Math.random() * settingOptions.length)]; //Will get a random number using both math floor and math random, and save that corisponding variable to setting
    fullStory.textContent = nounOneText.textContent + " " + verbText.textContent + " " + adjectiveText.textContent + " " + nounTwoText.textContent + " " + settingText.textContent;
}

/* Event Listeners
-------------------------------------------------- */
//Will add listeners to each button, which will activate each method once clicked
nounOne.addEventListener("click", noun1_on_click);
verb.addEventListener("click", verb_on_click);
adjective.addEventListener("click", adjective_on_click);
nounTwo.addEventListener("click", noun2_on_click);
setting.addEventListener("click", setting_on_click);

playback.addEventListener("click", playback_on_click);
random.addEventListener("click", random_on_click);
