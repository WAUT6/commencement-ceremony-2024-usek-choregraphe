$(document).ready(function () {
    // Create qi session
    QiSession(function (session) {
        console.log("Created a session and connected!");
    }, function () {
        console.log("Disconnected");
    });
})

function raiseEvent(name, value) {
    QiSession(function (session) {
        session.service("ALMemory").then(function (mem) {
            mem.raiseEvent(name, value);
        }, function (error) {
            console.log("An error occurred: ", error);
        });
    });
}

function raiseInputFieldEvent() {
    eventName = "tabletInput";
    eventValue = document.getElementById("inputField").value;

    // document.getElementById("result").innerHTML = eventName + " = " + eventValue;
    raiseEvent(eventName, eventValue);
}

function raiseConfirmationEvent(n) {
    eventName = n;
    eventValue = 1;

    raiseEvent(eventName, eventValue);
}

// new
function raiseConfirmationEventWithParameter(answer) {
    // const urlParams = new URLSearchParams(window.location.search);
    // const someValue = urlParams.get('questionNb');
    const someValue = decodeURI(getUrlParam("questionNb", ""));
    var qnb;
    switch  (someValue) {
        case '1':
            qnb = 'One';
            break;
        case '2':
            qnb = 'Two';
            break;
        case '3':
            qnb = 'Three';
            break;
        case '4':
            qnb = 'Four';
            break;
        case '5':
            qnb = 'Five';
            break;
    }
    //const someValue = 'One';
    const concatenatedAnswer = answer + '' + qnb;
    raiseConfirmationEvent(concatenatedAnswer);
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(param, defaultVal){
    var urlParam = defaultVal;

    if (window.location.href.indexOf(param) > -1) {
        urlParam = getUrlVars()[param];
    }
    return urlParam;
}