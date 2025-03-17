// XMLHttpRequest (XHR) is a JavaScript API used to interact with servers and fetch data asynchronously. It allows sending HTTP requests (GET, POST, etc.) without refreshing the web page.
// Example: Simple GET Request

var xhr = new XMLHttpRequest();
xhr.open("GET", "url", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
    }
};
xhr.send();
