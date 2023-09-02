import {template} from "./Links.tmpl.ts";
import styles from "./Links.module.less";
import Block from "../../Utils/Block.ts";
import {Link} from "../../Components";

class Links extends Block {
    constructor() {
        const link404 = new Link({
            children: "404",
            href: "/404"
        });
        const link500 = new Link({
            children: "500",
            href: "/500"
        });
        const linkLogin = new Link({
            children: "Логин",
            href: "/"
        });
        const linkReg = new Link({
            children: "Регистрация",
            href: "/sign-up"
        });
        const linkProf = new Link({
            children: "Профиль",
            href: "/settings"
        });
        const linkChat = new Link({
            children: "Чат",
            href: "/chat"
        });

        super({
            wrapperClass: styles.wrapper,
            titleText: "Ссылки",
            titleClass: styles.title,
            linksClass: styles.links,
            pageLinksClass: styles["page-links"],
            link404,
            link500,
            linkLogin,
            linkReg,
            linkProf,
            linkChat
        });
    }
    
    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default Links;
