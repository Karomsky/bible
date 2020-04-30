//var bibleContainer = document.getElementById("bible-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var bibleRes = JSON.parse(xhttp.responseText);
            var bible = bibleRes.bible;
            //bible.data("name");
            var output = "";
            for (var i = 0; i < bible.length; i++) {
                output += "<li>" + bible[i].name + " < /li>";
            }
            document.getElementById("bible-info").innerHTML = output;

        }
    };
    xhttp.open("GET", "bible.json", true);
    xhttp.send();
})

/** 
function renderHTML(data) {
    var htmlString = "this is";

    //   for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + " is a" + ".</p>";
    //htmlString += "<p>" + data[i].name + " is a" + data[i].name + ".</p>";
    //   bibleContainer.insertAdjacentHTML("beforeend", htmlString);
}
bibleContainer.insertAdjacentHTML("beforeend", htmlString);
*/