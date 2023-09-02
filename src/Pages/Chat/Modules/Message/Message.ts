import {template} from "./Message.tmpl.ts";
import styles from "./Message.module.less";
import Block from "../../../../Utils/Block.ts";

type MessageProps = {
    content: string,
    time: string,
    userMessage: boolean;
}

class Message extends Block {
    constructor(props: MessageProps) {
        super({
            ...props,
            text: props.content,
            wrapperClass: styles.wrapper,
            alignClass: props.userMessage ? styles.right : styles.left,
            messageClass: props.userMessage ? styles["user-message"] : styles.message,
            time: props.time,
            textClass: styles.text,
            timeClass: styles.time
        }); 
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default Message;
