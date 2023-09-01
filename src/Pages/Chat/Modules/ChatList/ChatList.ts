import {template} from "./ChatList.tmpl.ts";
import styles from "./ChatList.module.less";
import Block from "../../../../Utils/Block.ts";
import {Input} from "../../../../Components";
import ChatUser from "../ChatUser/ChatUser.ts";
import {ChatListItem} from "../../../../types.ts";
import connect from "../../../../Utils/connect.ts";
import {isArray} from "../../../../Utils/isEqual.ts";
import ChatController from "../../../../Controllers/ChatController.ts";

type ChatListProps = {
    chats: ChatListItem[],
}

class ChatList extends Block {
    constructor() {

        const searchInput = new Input({
            name: "search",
            placeholder: "поиск",
            type: "text",
            label: ""
        });

        const chatsUser: ChatUser[] = [];

        super({
            leftColClass: styles["left-col"],
            searchBlockClass: styles["search-block"],
            userInfoClass: styles["user-info"],
            avatarClass: styles.avatar,
            userClass: styles.user,
            searchInput,
            chatsUser,
        });
        
    }

    componentDidUpdate(oldProps: ChatListProps, newProps: ChatListProps): boolean {
        if (isArray(newProps)) return false;

        this.children.chatsUser = newProps.chats.map((chat) => {
            const newChatProps = {
                ...chat,
                events: {
                    click: () => {
                        ChatController.selectChat(chat);
                    }
                }
            };
            return new ChatUser(newChatProps);
        });

        return true;
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export const ChatListComponent = connect((state) => ({chats: state.chats || []}))(ChatList);
