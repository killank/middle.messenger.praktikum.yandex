import {Button, Input, Link} from "../../Components";

export default `
    <main>
        <div class="{{wrapperClass}}">
            <form class="{{formClass}}">
                <h2 class="{{titleClass}}">
                    {{titleText}}
                </h2>
                ${Input("Почта", "email", "text", "Введите почту")}
                ${Input("Логин", "login", "text", "Введите логин")}
                ${Input("Имя", "first_name", "text", "Введите имя")}
                ${Input("Фамилия", "second_name", "text", "Введите фамилию")}
                ${Input("Телефон", "phone", "text", "Введите телефон")}
                ${Input("Пароль", "password", "password", "Введите пароль")}
                ${Input("Повторите пароль", "password", "password", "Повторите пароль")}
                ${Button("Зарегистрироваться", "submit")}
                ${Link("Войти", "/login")}
            </form>
        </div>
    </main>
`;
