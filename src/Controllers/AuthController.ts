import AuthAPI from "../Api/Auth/AuthApi";
import {iParams} from "../Api/Auth/types";
import store from "../Utils/Store";

class AuthController {
    private api: AuthAPI;

    constructor() {
        this.api = new AuthAPI();
    }

    async signUp(data: iParams.iSignUp) {
        await this.api.signUp(data);
    }

    async signIn(data: iParams.iSignIn) {
        await this.api.signIn(data);
    }

    async logout() {
        await this.api.logout();
    }
    
    async getUser() {
        const res = await this.api.getUser();
        store.set("user", res);
    }
}

export default new AuthController();
