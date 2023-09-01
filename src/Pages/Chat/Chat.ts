import {template} from "./Chat.tmpl.ts";
import styles from "./Chat.module.less";
import Block from "../../Utils/Block.ts";
import {ChatListComponent} from "./Modules/ChatList/ChatList.ts";
import AuthController from "../../Controllers/AuthController.ts";
import ChatController from "../../Controllers/ChatController.ts";
import {ChatWindowComponent} from "./Modules/ChatWindow/ChatWindow.ts";

class Chat extends Block {
    constructor() {
        const chatList = new ChatListComponent({});

        const chatWindow = new ChatWindowComponent({});
        
        AuthController.getUser().then(() => {
            ChatController.getChats();
        });

        super({
            wrapperClass: styles.wrapper,
            chatList,
            chatWindow
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default Chat;
