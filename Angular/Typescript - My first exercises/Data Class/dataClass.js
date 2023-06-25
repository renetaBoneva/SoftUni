var Data1 = /** @class */ (function () {
    function Data1(method, uri, version, message) {
        this.response = "undefined";
        this.fulfilled = false;
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
    Data1.prototype.createRequest = function () {
        return console.log({
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: this.response,
            fulfilled: this.fulfilled,
        });
    };
    return Data1;
}());


let myData = new Data1('GET',
    'http://google.com', 'HTTP/1.1', '')
myData.createRequest('GET',
'http://google.com', 'HTTP/1.1', '')