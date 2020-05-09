function httpRequest (url, method = "GET", body, enctype = "application/json; charset=utf-8") {
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.timeout = 30000;
        xhr.ontimeout = function(){
            reject("Out of time");
        }
        if(method === "GET") {
            xhr.send();
        }
        else {
            xhr.send(body);
            xhr.setRequestHeader('Content-Type', enctype);
        }
        xhr.onreadystatechange = function () {
            if(this.readyState !== 4) {
                return;
            }
            if(this.status >= 200 && this.status <= 299){
                resolve(this.responseText);
            }
            reject(this.status + ": " + this.statusText);
        }
    })
}
module.exports = httpRequest;