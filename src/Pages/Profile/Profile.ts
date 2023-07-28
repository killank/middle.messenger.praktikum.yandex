import {template} from "./Profile.tmpl.ts";
import styles from "./Profile.module.less";
import Block from "../../Utils/Block.ts";
import {Button, Input, Link} from "../../Components/";

class Profile extends Block {
    constructor() {
        const emailInput = new Input({
            name: "email",
            placeholder: "Введите почту",
            type: "text",
            label: "Почта"
        });
        const loginInput = new Input({
            name: "login",
            placeholder: "Введите логин",
            type: "text",
            label: "Логин"
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
        const displayNameInput = new Input({
            name: "display_name",
            placeholder: "Введите имя",
            type: "text",
            label: "Имя в чате"
        });
        const phoneInput = new Input({
            name: "phone",
            placeholder: "Введите телефон",
            type: "phone",
            label: "Телефон"
        });
        const profileButton = new Button({
            children: "Изменить данные",
            type: "submit"
        });

        const oldPasswordInput = new Input({
            name: "oldPassword",
            placeholder: "Введите старый пароль",
            type: "password",
            label: "Старый пароль"
        });
        const newPasswordInput = new Input({
            name: "newPassword",
            placeholder: "Введите новый пароль",
            type: "password",
            label: "Новый пароль"
        });
        const newPasswordRepeatInput = new Input({
            name: "newPassword",
            placeholder: "Повторите пароль",
            type: "password",
            label: "Повторите новый пароль"
        });
        const passwordButton = new Button({
            children: "Сохранить пароль",
            type: "submit"
        });

        const link = new Link({
            children: "Выйти",
            href: "/"
        });
        super({
            wrapperClass: styles.wrapper,
            leftColClass: styles["left-col"],
            rightColClass: styles["right-col"],
            avatarClass: styles.avatar,
            editComponentClass: styles["edit-component"],
            formClass: styles.form,
            avatarBlockClass: styles["avatar-block"],
            emailInput,
            loginInput,
            firstNameInput,
            secondNameInput,
            displayNameInput,
            phoneInput,
            profileButton,
            oldPasswordInput,
            newPasswordInput,
            newPasswordRepeatInput,
            passwordButton,
            link
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default Profile;
