import {template} from "./Chat.tmpl.ts";
import styles from "./Chat.module.less";
import Block from "../../Utils/Block.ts";
import {Input} from "../../Components";
import ChatUser from "./Modules/ChatUser/ChatUser.ts";

class Chat extends Block {
    constructor() {
        const searchInput = new Input({
            name: "search",
            placeholder: "поиск",
            type: "text",
            label: ""
        });
        const chatUser = new ChatUser({
            user: "Вадим",
            last_message: "Привет!",
            avatar: "аватар",
            time: "10:43",
            new_messages: 4
        });

        super({
            wrapperClass: styles.wrapper,
            leftColClass: styles["left-col"],
            searchBlockClass: styles["search-block"],
            rightColClass: styles["right-col"],
            headerClass: styles.header,
            userInfoClass: styles["user-info"],
            avatarClass: styles.avatar,
            userClass: styles.user,
            messagesClass: styles.messages,
            footerClass: styles.footer,
            inputMessageClass: styles["input-message"],
            searchInput,
            chatUser
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default Chat;
