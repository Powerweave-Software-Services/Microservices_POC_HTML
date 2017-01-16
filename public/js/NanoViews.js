// NanoViews source code

// Requires jQuery to run
// Requires you to declare and define two javascript variables
// 1. containerId - the id of the container (hopefully a div) that will contain the view's HTML.
// 2. host - the virtual path of the application.
// 3. defaultViewURL - the first view to be loaded when the page loads.

var hostAddedDefaultURL = "";
var currentURL = "";

$(function () {
    hostAddedDefaultURL = host + defaultViewURL;
    console.log("Default view:" + hostAddedDefaultURL);
    LoadURLInContainer(hostAddedDefaultURL, containerId);
});

function LoadURLInContainer(URL, containerId) {
    if (currentURL != URL) {
        $.get(URL, function (data) {
            GetContainer(containerId).html(data);
            console.log("Load was performed.");
            currentURL = URL;
        });
    }
}

function LoadURL(URL) {
    LoadURLInContainer(URL, containerId);
}

function GetContainer(containerId) {
    return $("#" + containerId);
}