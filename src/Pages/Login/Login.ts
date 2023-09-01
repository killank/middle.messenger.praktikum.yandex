import {template} from "./Login.tmpl.ts";
import styles from "./Login.module.less";
import Block from "../../Utils/Block.ts";
import {Button, Input, Link} from "../../Components/index.ts";
import submit from "../../Utils/submit.ts";
import validate from "../../Utils/validate.ts";
import AuthController from "../../Controllers/AuthController.ts";
import router from "../../Utils/Router.ts";
import connect from "../../Utils/connect.ts";

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
                click: (event) => {
                    event.preventDefault();
                    const {errors, values} = submit(event);

                    if (Object.keys(errors).length === 0) {
                        AuthController.signIn({
                            login: values.login,
                            password: values.password
                        }).then(() => {
                            AuthController.getUser().then(() => {
                                router.go("/messenger");
                            });
                        })
                            .catch((error: any) => console.error(error.reason));
                    } else return null;
                    AuthController.getUser();
                }
            }
        });
        const link = new Link({
            children: "Нет аккаунта",
            href: "/sign-up"
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

    componentDidMount() {
        AuthController.getUser().then(() => {
            router.go("/messenger");
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

const LoginWithStore = connect((state) => ({user: state.user}))(Login);

export default new LoginWithStore({});
