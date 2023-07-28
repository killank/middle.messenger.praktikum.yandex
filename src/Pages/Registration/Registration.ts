import {template} from "./Registration.tmpl.ts";
import styles from "./Registration.module.less";
import Block from "../../Utils/Block.ts";
import {Button, Input, Link} from "../../Components/";

class Registration extends Block {
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
        const passwordRepeatInput = new Input({
            name: "password",
            placeholder: "Повторите пароль",
            type: "password",
            label: "Повторите пароль"
        });
        const firstNameInput = new Input({
            name: "first_name",
            placeholder: "Введите имя",
            type: "text",
            label: "Имя"
        });
        const secondNameInput = new Input({
            name: "second_name",
            placeholder: "Введите фамилию",
            type: "text",
            label: "Фамилия"
        });
        const emailInput = new Input({
            name: "email",
            placeholder: "Введите почту",
            type: "text",
            label: "Почта"
        });
        const phoneInput = new Input({
            name: "phone",
            placeholder: "Введите телефон",
            type: "phone",
            label: "Телефон"
        });
        const button = new Button({
            children: "Зарегистрироваться",
            type: "submit"
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
