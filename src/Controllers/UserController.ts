import UserApi from "../Api/User/UserApi";
import {iParams} from "../Api/User/types";
import Store from "../Utils/Store";

class UserController {
    private api: UserApi;

    constructor() {
        this.api = new UserApi();
    }

    async changeProfile(data: iParams.iChangeProfile) {
        await this.api.changeProfile(data);
    }

    async changeAvatar(data: iParams.iChangeAvatar) {
        await this.api.changeAvatar(data);
    }

    async changePassword(data: iParams.iChangePassword) {
        await this.api.changePassword(data);
    }

    async getUsers(login: string) {
        if (login.length === 0) {
            Store.set("users", []); 
        } else {
            await this.api.getUsers({login}).then((result) => {
                Store.set("users", result);
            });
        }
    }

}

export default new UserController();
