import {template} from "./Login.tmpl.ts";
import styles from "./Login.module.less";
import Block from "../../Utils/Block.ts";
import {Button, Input, Link} from "../../Components/index.ts";
import submit from "../../Utils/submit.ts";
import validate from "../../Utils/validate.ts";

class Login extends Block {
    constructor() {
        const loginInput = new Input({
            name: "login",
            placeholder: "Введите логин",
            type: "text",
            label: "Логин",
            events: {
                blur: (event) => validate(event)
            },
        });
        const passwordInput = new Input({
            name: "password",
            placeholder: "Введите пароль",
            type: "password",
            label: "Пароль",
            events: {
                blur: (event) => validate(event)
            },
        });
        const button = new Button({
            children: "Авторизоваться",
            type: "submit",
            events: {
                click: (event) => submit(event)
            }
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
