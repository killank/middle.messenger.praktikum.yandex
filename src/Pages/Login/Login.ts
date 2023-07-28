import {template} from "./Login.tmpl.ts";
import styles from "./Login.module.less";
import Block from "../../Utils/Block.ts";
import {Button, Input, Link} from "../../Components/index.ts";

class Login extends Block {
    constructor() {
        
        const loginInput = new Input({
            name: "login",
            placeholder: "Введите логин",
            type: "text",
            label: "Логин"
        });
        const passwordInput = new Input({
            name: "password",
            placeholder: "Введите пароль",
            type: "password",
            label: "Пароль"
        });
        const button = new Button({
            children: "Авторизоваться",
            type: "submit"
        });
        const link = new Link({
            children: "Нет аккаунта",
            href: "/registration"
        });

        super({
            wrapperClass: styles.wrapper,
            titleText: "Вход",
            titleClass: styles.title,
            formClass: styles.form,
            loginInput,
            passwordInput,
            button,
            link
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default Login;
