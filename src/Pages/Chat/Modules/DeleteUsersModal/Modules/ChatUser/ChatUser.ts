import {template} from "./ChatUser.tmpl.ts";
import styles from "./ChatUser.module.less";
import Block from "../../../../../../Utils/Block.ts";

type ChatUserProps = {
    events?: Record<string, (event: Event) => void>,
    class?: string,
    login: string,
    creator?: boolean
}

class ChatUser extends Block {
    constructor(props: ChatUserProps) {
        super({
            ...props,
            class: props.creator ? styles.creator : styles.user,
            propsClass: props.class,
            login: props.login,
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default ChatUser;
