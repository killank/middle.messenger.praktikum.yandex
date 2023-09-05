import {template} from "./Profile.tmpl.ts";
import styles from "./Profile.module.less";
import Block from "../../Utils/Block.ts";
import {Button, Link} from "../../Components/";
import submit from "../../Utils/submit.ts";
import validate, {validatePasswords} from "../../Utils/validate.ts";
import AuthController from "../../Controllers/AuthController.ts";
import connect from "../../Utils/connect.ts";
import Store from "../../Utils/Store.ts";
import ProfileInput from "./Components/ProfileInput/ProfileInput.ts";
import UserController from "../../Controllers/UserController.ts";
import Notification from "../../Components/Notification/Notification.ts";
import AvatarModal from "./Components/AvatarModal/AvatarModal.ts";
import Avatar from "./Components/Avatar/Avatar.ts";
import Image from "../../Icons/Image.svg";
import {User} from "../../types.ts";

type ProfileProps = {
    user: User
}

class Profile extends Block {
    
    constructor(props: ProfileProps) {
        const urlResources = "https://ya-praktikum.tech/api/v2/resources";

        const avatarModal = new AvatarModal({
            title: "Загрузите файл"
        });

        const emailInput = new ProfileInput({
            name: "email",
            placeholder: "Введите почту",
            type: "text",
            label: "Почта",
            userInfo: "",
            events: {
                blur: (event) => validate(event)
            },
        });
        const loginInput = new ProfileInput({
            name: "login",
            placeholder: "Введите логин",
            type: "text",
            label: "Логин",
            userInfo: "",
            events: {
                blur: (event) => validate(event)
            },
        });
        const firstNameInput = new ProfileInput({
            name: "first_name",
            placeholder: "Введите имя",
            type: "text",
            label: "Имя",
            userInfo: "",
            events: {
                blur: (event) => validate(event)
            },
        });
        const secondNameInput = new ProfileInput({
            name: "second_name",
            placeholder: "Введите фамилию",
            type: "text",
            label: "Фамилия",
            userInfo: "",
            events: {
                blur: (event) => validate(event)
            },
        });
        const displayNameInput = new ProfileInput({
            name: "display_name",
            placeholder: "Введите имя",
            type: "text",
            label: "Имя в чате",
            userInfo: "",
            events: {
                blur: (event) => validate(event)
            },
        });
        const phoneInput = new ProfileInput({
            name: "phone",
            placeholder: "Введите телефон",
            type: "phone",
            label: "Телефон",
            userInfo: "",
            events: {
                blur: (event) => validate(event)
            },
        });
        const profileNotification = new Notification({children: "Данные аккаунта изменены",
            duration: 3000});
        const profileButton = new Button({
            children: "Изменить данные",
            type: "submit",
            events: {
                click: (event) => {
                    event.preventDefault();
                    const {errors, values} = submit(event);

                    if (Object.keys(errors).length === 0) {
                        UserController.changeProfile({
                            login: values.login,
                            first_name: values.first_name,
                            second_name: values.second_name,
                            display_name: values.display_name,
                            email: values.email,
                            phone: values.phone
                        }).then(() => {
                            AuthController.getUser();
                            profileNotification.show();
                        })
                            .catch((error: any) => console.error(error.reason));
                    } else return null;
                }
            }
        });

        const oldPasswordInput = new ProfileInput({
            name: "oldPassword",
            placeholder: "Введите старый пароль",
            type: "password",
            label: "Старый пароль",
            userInfo: "",
            events: {
                blur: (event) => validate(event)
            },
        });
        const newPasswordInput = new ProfileInput({
            name: "newPassword",
            placeholder: "Введите новый пароль",
            type: "password",
            label: "Новый пароль",
            userInfo: "",
            events: {
                blur: (event) => validate(event)
            },
        });
        const newPasswordRepeatInput = new ProfileInput({
            name: "newPasswordRepeat",
            placeholder: "Повторите пароль",
            type: "password",
            label: "Повторите новый пароль",
            userInfo: "",
            events: {
                blur: (event) => validate(event)
            },
        });

        const profileAvatar = new Avatar({
            avatar: Image,
            events: {
                click: (event: Event) => {
                    event.preventDefault();
                    avatarModal.show();
                }
            }
        });

        const passwordNotification = new Notification({children: "Пароль изменен",
            duration: 3000});
        const passwordButton = new Button({
            children: "Сохранить пароль",
            type: "submit",
            events: {
                click: (event) => {
                    event.preventDefault();
                    const {errors, values} = submit(event);
                    const validatePass = validatePasswords(values.newPassword, values.newPasswordRepeat, "newPasswordRepeat");
                    if (validatePass) return null;
                    
                    if (Object.keys(errors).length === 0) {
                        UserController.changePassword({
                            oldPassword: values.oldPassword,
                            newPassword: values.newPassword,
                        }).then(() => {
                            AuthController.getUser();
                            const inputs = (<HTMLElement>(<HTMLElement>event.target).parentNode).querySelectorAll("input");
                            inputs.forEach((input) => {
                                input.value = "";
                            });
                            passwordNotification.show();

                        })
                            .catch((error: any) => console.error(error.reason));
                    } else return null;
                }
            }
        });

        const link = new Link({
            children: "Выйти",
            href: "/login",
            events: {
                click: () => {
                    AuthController.logout();
                    Store.set("user", null);
                }
            }
        });
        
        AuthController.getUser().then(() => {
            emailInput.setProps({userInfo: Store.getState().user.email});
            loginInput.setProps({userInfo: Store.getState().user.login});
            firstNameInput.setProps({userInfo: Store.getState().user.first_name});
            secondNameInput.setProps({userInfo: Store.getState().user.second_name});
            displayNameInput.setProps({userInfo: Store.getState().user.display_name});
            phoneInput.setProps({userInfo: Store.getState().user.phone});
            profileAvatar.setProps({avatar: `${urlResources}/${Store.getState().user.avatar}`,
                events: {
                    click: () => {
                        avatarModal.show();
                    }
                }});
        });

        super({
            ...props,
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
            link,
            passwordNotification,
            profileNotification,
            avatarModal,
            profileAvatar
        });
    }

    componentDidUpdate(_: any, newProps: any): boolean {
        const urlResources = "https://ya-praktikum.tech/api/v2/resources";
        if (newProps?.user) {
            const avatar = this.children.profileAvatar as Block;
            avatar.setProps({avatar: `${urlResources}/${newProps.user.avatar}`});
        }
        return true;
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

const ProfileWithStore = connect((state) => ({user: state.user}))(Profile);

export default new ProfileWithStore({});
