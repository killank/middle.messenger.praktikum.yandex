import Handlebars from "handlebars";
import ChatUserTmpl from "./ChatUser.tmpl.ts";
import styles from "./ChatUser.module.less";

const ChatUser = (user: string, last_message: string, avatar: string, time: string, new_messages: number) => {
    const template = Handlebars.compile(ChatUserTmpl);

    return template({
        user,
        last_message,
        wrapperClass: styles.wrapper,
        avatar,
        time,
        new_messages,
        avatarClass: styles.avatar,
        textClass: styles.text,
        titleBlockClass: styles.titleBlock,
        userClass: styles.user,
        timeClass: styles.time,
        messageBlockClass: styles.messageBlock,
        messageClass: styles.message,
        newMessagesClass: styles.newMessages
    });
};

export default ChatUser;
