import "./app.less";
import Chat from "./Pages/Chat/Chat";
import Error from "./Pages/Error/Error";
import Links from "./Pages/Links/Links";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Registration from "./Pages/Registration/Registration";
import Block from "./Utils/Block";
import renderDOM from "./Utils/renderDOM";

document.addEventListener("DOMContentLoaded", () => {
    let page: Block;
    const location = window.location.pathname;

    switch (location) {
        case "/":
            page = new Links();
            renderDOM("#app", page);
            break;
        case "/login":
            page = new Login();
            renderDOM("#app", page);
            break;
        case "/registration":
            page = new Registration();
            renderDOM("#app", page);
            break;
        case "/profile":
            page = new Profile();
            renderDOM("#app", page);
            break;
        case "/chat":
            page = new Chat();
            renderDOM("#app", page);
            break;
        case "/500":
            page = new Error({
                title: "500",
                subtitle: "Мы уже фиксим"
            });
            renderDOM("#app", page);
            break;
        case "/404":
            page = new Error({
                title: "404",
                subtitle: "Не туда попали"
            });
            renderDOM("#app", page);
            break;
        default:
            page = new Login();
            renderDOM("#app", page);
            break;
    }
    
});
