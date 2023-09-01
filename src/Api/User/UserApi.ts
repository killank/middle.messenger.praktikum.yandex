import {HTTPTransport} from "../../Utils/HTTPTransport";
import User from "./endpoints";
import {iParams} from "./types";

class UserApi {
    protected http: HTTPTransport;

    constructor() {
        this.http = new HTTPTransport();
    }

    changeProfile(data: iParams.iChangeProfile) {
        return this.http.put(User.user.changeProfile, data);
    }

    changeAvatar(data: iParams.iChangeAvatar) {
        return this.http.put(User.user.changeAvatar, data);
    }

    changePassword(data: iParams.iChangePassword) {
        return this.http.put(User.user.changePassword, data);
    }

    getUsers(data: iParams.iGetUsers) {
        return this.http.post(User.user.searchUser, data);
    }

}

export default UserApi;
