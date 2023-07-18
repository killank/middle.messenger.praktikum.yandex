import Handlebars from "handlebars";
import ButtonTmpl from "./Button.tmpl.ts";
import styles from "./Button.module.less";

const Button = (children: string, type: string) => {
    const template = Handlebars.compile(ButtonTmpl);

    return template({
        children,
        type,
        class: styles.button
    });
};

export default Button;
