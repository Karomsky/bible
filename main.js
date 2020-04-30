var key = "8e9c91fd13587b3df152349277c5b1b0";

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function() {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
    }
});

xhr.open("GET", "https://api.scripture.api.bible/v1/bibles");
xhr.setRequestHeader(`api-key`, `8e9c91fd13587b3df152349277c5b1b0`);

xhr.send(data);