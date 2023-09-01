const userPrefix = "/user";

export default {
    user: {
        changeProfile: `${userPrefix}/profile`,
        changeAvatar: `${userPrefix}/profile/avatar`,
        changePassword: `${userPrefix}/password`,
        user: `${userPrefix}/{id}`,
        searchUser: `${userPrefix}/search`
    }
};
