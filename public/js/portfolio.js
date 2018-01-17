

function overlayOn(i) {
    switch(i) {
    case 1: 
        document.getElementById("ol-project-name").innerHTML = "JavaScript Web Scraper and Excel Search – Business Development Manager, WET Design";
        document.getElementById("ol-need").innerHTML = "On average, when a sales conference was scheduled, my colleague expended two to three days manually reviewing and collecting attendee information on conference websites, intending to reach out and schedule meetings, while trying to manage other priorities at the same time.";
        document.getElementById("ol-solution").innerHTML = "Utilizing skills developed from creating websites for fun, wrote scripts that navigated the DOM, scraped data, and output to CSV format.  Then wrote a VBA script that searched and served up only relevant results. ";
        document.getElementById("ol-result").innerHTML = "This allowed the process to be condensed to a few minutes, saving days of time.";
        document.getElementById("ol-skills").innerHTML = "JavaScript, HTML, CSS, VBA.";
        document.getElementById("ol-dev-time").innerHTML = "About an hour.";
        document.getElementById("ol-year").innerHTML = "2017";
        document.getElementById("ol-add-explanation").style.display = "none";
        document.getElementById("ol-explanation-3").style.display = "none";
        document.getElementById("ol-explanation-4").style.display = "none";
        break;
    case 2:
        document.getElementById("ol-project-name").innerHTML = "Web Page Deployment, Leah Johnson CPA";
        document.getElementById("ol-need").innerHTML = "The client needed a web page setup for her firm.";
        document.getElementById("ol-solution").innerHTML = "Deployed a website using a base Bootstrap template and then heavily modified it to meet the requirements of the client.";
        document.getElementById("ol-result").innerHTML = "Provided a landing page for visitors to reach out and contact my client and the access a secure client for uploading documents for tax and bookkeeping.";
        document.getElementById("ol-skills").innerHTML = "JavaScript, PHP, HTML, CSS, Bootstrap.";
        document.getElementById("ol-dev-time").innerHTML = "Five hours.";
        document.getElementById("ol-year").innerHTML = "2016";
        document.getElementById("ol-add-explanation").style.display = "none";
        document.getElementById("ol-explanation-3").style.display = "none";
        document.getElementById("ol-explanation-4").style.display = "none";
        break;
    case 3:
        document.getElementById("ol-project-name").innerHTML = "C#, COM, VBA Report Generation Program – Operations Manager, Envirogen Technologies";
        document.getElementById("ol-need").innerHTML = "A single report consumed a full day of employee time, due most to need for manual removal of spurious data.";
        document.getElementById("ol-solution").innerHTML = "Developed an application that generated a report when given data from flat files.  The program sifted through the data, removing spurious entries. Calculations were performed, storing averages and totals.  Utilizing COM Interop and VBA, Excel created graphs and then populated a template in Word with graphs and data.";
        document.getElementById("ol-result").innerHTML = "8+ hours of time were condensed to ten minutes.";
        document.getElementById("ol-skills").innerHTML = "C#, COM, VBA.";
        document.getElementById("ol-dev-time").innerHTML = "About 80 hours.";
        document.getElementById("ol-year").innerHTML = "2011";
        document.getElementById("ol-add-explanation").style.display = "inline";
        document.getElementById("ol-explanation-3").style.display = "inline";
        document.getElementById("ol-explanation-4").style.display = "none";
        break;
    case 4: 
        document.getElementById("ol-project-name").innerHTML = "Visual Basic/C# Remote Notification Program (IX Info Up) – Control Systems Specialist, Basin Water";
        document.getElementById("ol-need").innerHTML = "Treatment systems were in geographically diverse locations, with an analog phone line for remote access. Staff manually retrieved data each day. Alarm notifications were limited audio messages, without specific information.";
        document.getElementById("ol-solution").innerHTML = "Utilizing Visual Basic, the program communicated with the local controls system, dialed up an internet connection, and sent emails containing specific data each day, and during any alarm event. ";
        document.getElementById("ol-result").innerHTML = "Operational inefficiencies were significantly reduced, recovering hours of time, including overtime.";
        document.getElementById("ol-skills").innerHTML = "Visual Basic, VBA, (eventually converted to C# and added configurable profiles and a SQLite database).";
        document.getElementById("ol-dev-time").innerHTML = "About 20 hours.";
        document.getElementById("ol-year").innerHTML = "2007, and updated and maintained through 2016.";
        document.getElementById("ol-add-explanation").style.display = "inline";
        document.getElementById("ol-explanation-4").style.display = "inline";
        document.getElementById("ol-explanation-3").style.display = "none";
        break;
    default:
            break;
}
        document.getElementById("an-overlay").style.display = "block";
        unloadScrollBars();
}

function overlayOff() {
    document.getElementById("an-overlay").scrollTop = 0;
    document.getElementById("overlay-text").scrollTop = 0;
    document.getElementById("an-overlay").style.display = "none";
    reloadScrollBars();
}

//Code taken from: https://stackoverflow.com/users/1425405/lyncee
function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}

//Code taken from: https://stackoverflow.com/users/1425405/lyncee
function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}

