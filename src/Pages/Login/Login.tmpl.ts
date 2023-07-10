import {Button, Input, Link} from '../../Components';

export default `
    <div class="{{wrapperClass}}">
        <form class="{{formClass}}">
            <span class="{{titleClass}}">
                {{titleText}}
            </span>
            ${Input("Логин", "login", "text", "Введите логин")}
            ${Input("Пароль", "password", "text", "Введите пароль")}
            ${Button("Авторизоваться", "submit")}
            ${Link("Нет аккаунта", "/registration")}
        </form>

    </div>
`;
