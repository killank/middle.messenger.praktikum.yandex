import "./app.less";
import Chat from "./Pages/Chat/Chat";
import Error from "./Pages/Error/Error";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Registration from "./Pages/Registration/Registration";
import router from "./Utils/Router";

const PATHS = {
    login: "/",
    registration: "/sign-up",
    profile: "/settings",
    chat: "/messenger",
    E500: "/500",
    E404: "/404",
};

document.addEventListener("DOMContentLoaded", () => {

    router
        .use(PATHS.login, Login)
        .use(PATHS.registration, new Registration())
        .use(PATHS.chat, new Chat())
        .use(PATHS.profile, Profile)
        .use(PATHS.E500, new Error({
            title: "500",
            subtitle: "Мы уже фиксим"
        }))
        .use(PATHS.E404, new Error({
            title: "404",
            subtitle: "Мы уже фиксим"
        }))
        .start();
    
});
