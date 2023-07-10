import Handlebars from 'handlebars';
import RegistrationTmpl from './Registration.tmpl.ts';
import styles from './Registration.module.less';

const Registration = () => {
    const template = Handlebars.compile(RegistrationTmpl);

    return template({
        wrapperClass: styles.wrapper,
        titleText: "Регистрация",
        titleClass: styles.title,
        formClass: styles.form
    });
};

export default Registration;
