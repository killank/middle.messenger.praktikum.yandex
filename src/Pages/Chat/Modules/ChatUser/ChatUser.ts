import {template} from "./ChatUser.tmpl.ts";
import styles from "./ChatUser.module.less";
import Block from "../../../../Utils/Block.ts";

type ChatUserProps = {
    user: string,
    last_message: string,
    avatar: string,
    time: string,
    new_messages: number
}

class ChatUser extends Block {
    constructor(props: ChatUserProps) {
        super({
            user: props.user,
            last_message: props.last_message,
            wrapperClass: styles.wrapper,
            avatar: props.avatar,
            time: props.time,
            new_messages: props.new_messages,
            avatarClass: styles.avatar,
            textClass: styles.text,
            titleBlockClass: styles["title-block"],
            userClass: styles.user,
            timeClass: styles.time,
            messageBlockClass: styles["message-block"],
            messageClass: styles.message,
            newMessagesClass: styles["new-messages"]
        }); 
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default ChatUser;
