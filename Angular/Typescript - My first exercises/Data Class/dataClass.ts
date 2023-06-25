class Data {
    private method: string;
    private uri: string;
    private version: string;
    private message: string;

    response:string = "undefined";
    fulfilled:boolean = false;

    constructor(
        method: string,
        uri: string,
        version: string,
        message: string,
    ) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }

    createRequest(){
        return {
            method: this.method,
            uri: this.uri,
            version: this.version,
            message: this.message,
            response: this.response,
            fulfilled: this.fulfilled,
        }
    }
}
