import Handlebars from 'handlebars';
import LoginTmpl from './Login.tmpl.ts';
import styles from './Login.module.less';

const Login = () => {
    const template = Handlebars.compile(LoginTmpl);

    return template({
        wrapperClass: styles.wrapper,
        titleText: "Вход",
        titleClass: styles.title,
        formClass: styles.form
    });
};

export default Login;
