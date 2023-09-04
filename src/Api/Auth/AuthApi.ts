import {HTTPTransport} from "../../Utils/HTTPTransport.ts";
import Auth from "./endpoints.ts";
import {iParams} from "./types";

class AuthAPI {
    protected http: HTTPTransport;

    constructor() {
        this.http = new HTTPTransport();
    }

    signUp(data: iParams.iSignUp) {
        return this.http.post(Auth.auth.signUp, data);
    }

    signIn(data: iParams.iSignIn) {
        return this.http.post(Auth.auth.signIn, data);
    }

    getUser() {
        return this.http.get(Auth.auth.user);
    }
 
    logout() {
        return this.http.post(Auth.auth.logout);
    }

}

export default AuthAPI;
