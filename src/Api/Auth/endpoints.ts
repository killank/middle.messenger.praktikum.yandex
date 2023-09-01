const authPrefix = "/auth";

export default {
    auth: {
        signUp: `${authPrefix}/signup`,
        signIn: `${authPrefix}/signin`,
        logout: `${authPrefix}/logout`,
        user: `${authPrefix}/user`
    }
};
