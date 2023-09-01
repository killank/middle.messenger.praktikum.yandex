import {template} from "./Notification.tmpl.ts";
import styles from "./Notification.module.less";
import Block from "../../Utils/Block.ts";

type NotificationProps = {
    children: string,
    duration: number,
}

class Notification extends Block {
    constructor(props: NotificationProps) {
        super(props);

    }

    show() {
        this.getContent().style.display = "block";
        setTimeout(() => {
            this.hide();
        }, this.props.duration);
    }

    render() {
        return this.compile(template, {
            children: this.props.children,
            class: styles.notification,
        });
    }
}

export default Notification;
