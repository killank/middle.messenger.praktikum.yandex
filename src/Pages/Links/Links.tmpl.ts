import {Link} from '../../Components';

export default `
    <div class="{{wrapperClass}}">
        <div class="{{linksClass}}">
            <span class="{{titleClass}}">
                {{titleText}}
            </span>
            ${Link("500", "/500")}
            ${Link("404", "/404")}
            ${Link("Логин", "/login")}
            ${Link("Регистрация", "/registration")}
            ${Link("Профиль", "/profile")}
            ${Link("Чат", "/chat")}
        </div>

    </div>
`;