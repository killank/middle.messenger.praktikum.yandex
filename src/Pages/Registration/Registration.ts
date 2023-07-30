import {template} from "./Registration.tmpl.ts";
import styles from "./Registration.module.less";
import Block from "../../Utils/Block.ts";
import {Button, Input, Link} from "../../Components/";
import submit from "../../Utils/submit.ts";
import validate from "../../Utils/validate.ts";

class Registration extends Block {
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
        const passwordRepeatInput = new Input({
            name: "password",
            placeholder: "Повторите пароль",
            type: "password",
            label: "Повторите пароль",
            events: {
                blur: (event) => validate(event)
            },
        });
        const firstNameInput = new Input({
            name: "first_name",
            placeholder: "Введите имя",
            type: "text",
            label: "Имя",
            events: {
                blur: (event) => validate(event)
            },
        });
        const secondNameInput = new Input({
            name: "second_name",
            placeholder: "Введите фамилию",
            type: "text",
            label: "Фамилия",
            events: {
                blur: (event) => validate(event)
            },
        });
        const emailInput = new Input({
            name: "email",
            placeholder: "Введите почту",
            type: "text",
            label: "Почта",
            events: {
                blur: (event) => validate(event)
            },
        });
        const phoneInput = new Input({
            name: "phone",
            placeholder: "Введите телефон",
            type: "phone",
            label: "Телефон",
            events: {
                blur: (event) => validate(event)
            },
        });
        const button = new Button({
            children: "Зарегистрироваться",
            type: "submit",
            events: {
                click: (event) => submit(event)
            }
        });
        const link = new Link({
            children: "Войти",
            href: "/login"
        });
        super({
            wrapperClass: styles.wrapper,
            titleText: "Регистрация",
            titleClass: styles.title,
            formClass: styles.form,
            loginInput,
            passwordInput,
            passwordRepeatInput,
            firstNameInput,
            secondNameInput,
            emailInput,
            phoneInput,
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

export default Registration;
