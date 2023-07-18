import "./app.less";
import Chat from "./Pages/Chat/Chat";
import Error from "./Pages/Error/Error";
import Links from "./Pages/Links/Links";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Registration from "./Pages/Registration/Registration";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector<HTMLDivElement>("#app")!;
    let page: string;
    const location = window.location.pathname;

    switch (location) {
        case "/":
            page = Links();
            break;
        case "/login":
            page = Login();
            break;
        case "/registration":
            page = Registration();
            break;
        case "/profile":
            page = Profile();
            break;
        case "/chat":
            page = Chat();
            break;
        case "/500":
            page = Error("500", "Мы уже фиксим");
            break;
        case "/404":
            page = Error("404", "Не туда попали");
            break;
        default:
            page = Error("404", "Не туда попали");
            break;
    }

    root.innerHTML = page;
});
