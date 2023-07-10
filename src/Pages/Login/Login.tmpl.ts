import {Button, Input, Link} from '../../Components';

export default `
    <main>
        <div class="{{wrapperClass}}">
            <form class="{{formClass}}">
                <h2 class="{{titleClass}}">
                    {{titleText}}
                </h2>
                ${Input("Логин", "login", "text", "Введите логин")}
                ${Input("Пароль", "password", "text", "Введите пароль")}
                ${Button("Авторизоваться", "submit")}
                ${Link("Нет аккаунта", "/registration")}
            </form>
        </div>
    </main>
`;
