export declare namespace iParams {
    type iChangeProfile = {
        first_name: string,
        second_name: string,
        display_name: string,
        login: string,
        email: string,
        phone: string
    }
    type iChangeAvatar = FormData;
    type iChangePassword = {
        oldPassword: string,
        newPassword: string
    }
    type iGetUsers = {
        login: string
    }
}
