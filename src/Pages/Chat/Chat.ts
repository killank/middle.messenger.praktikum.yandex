import {template} from "./Chat.tmpl.ts";
import styles from "./Chat.module.less";
import Block from "../../Utils/Block.ts";
import {Button, Input} from "../../Components";
import ChatUser from "./Modules/ChatUser/ChatUser.ts";
import submit from "../../Utils/submit.ts";
import validate from "../../Utils/validate.ts";
import InputOnly from "../../Components/Input/Input/InputOnly.ts";

class Chat extends Block {
    constructor() {
        const searchInput = new Input({
            name: "search",
            placeholder: "поиск",
            type: "text",
            label: ""
        });
        const messageInput = new InputOnly({
            name: "message",
            placeholder: "Сообщение",
            type: "text",
            propsInputClass: styles["input-message"],
            events: {
                blur: (event) => validate(event)
            },
        });

        const button = new Button({
            children: "",
            type: "submit",
            events: {
                click: (event) => submit(event)
            },
            class: styles["message-button"]
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
            chatUser,
            button,
            messageInput
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default Chat;
