import {template} from "./ChatUser.tmpl.ts";
import styles from "./ChatUser.module.less";
import Block from "../../../../Utils/Block.ts";
import {LastMessage} from "../../../../types.ts";

type ChatUserProps = {
    avatar?: string,
    created_by: number,
    id: number,
    last_message: LastMessage,
    title: string,
    unread_count: number,
    events?: Record<string, (event: Event) => void>,
}

class ChatUser extends Block {

    constructor(props: ChatUserProps) {
        const urlResources = "https://ya-praktikum.tech/api/v2/resources";

        super({
            ...props,
            title: props.title,
            last_message: props.last_message && props.last_message.content,
            wrapperClass: styles.wrapper,
            avatar: props.avatar ? `${urlResources}/${props.avatar}` : null,
            time: props.last_message && props.last_message.time,
            unread_count: props.unread_count,
            avatarClass: styles.avatar,
            textClass: styles.text,
            titleBlockClass: styles["title-block"],
            titleClass: styles.title,
            timeClass: styles.time,
            messageBlockClass: styles["message-block"],
            messageClass: styles.message,
            unreadCountClass: styles["unread-count"]
        }); 
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default ChatUser;
