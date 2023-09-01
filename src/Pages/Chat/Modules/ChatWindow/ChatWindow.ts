import {template} from "./ChatWindow.tmpl.ts";
import styles from "./ChatWindow.module.less";
import Block from "../../../../Utils/Block.ts";
import {Button} from "../../../../Components";
import InputOnly from "../../../../Components/Input/Input/InputOnly.ts";
import connect from "../../../../Utils/connect.ts";
import Message from "../Message/Message.ts";
import Store from "../../../../Utils/Store.ts";
import MessagesController from "../../../../Controllers/MessagesController.ts";
import validateData from "../../../../Utils/validateData.ts";
import ChatAddModal from "../ChatAddModal/ChatAddModal.ts";
import DeleteChatModal from "../ChatDeleteModal/DeleteChatModal.ts";
import ChatAddUser from "../ChatAddUser/ChatAddUser.ts";
import DeleteUsersModal from "../DeleteUsersModal/DeleteUsersModal.ts";

type ChatWindowProps = {
    title: string,
    messages: Message[];
}

class ChatWindow extends Block {
    constructor(props: ChatWindowProps) {
        // const messages: Message[] = [];

        const chatAddModal = new ChatAddModal({
            title: "Добавить чат"
        });

        const deleteChatModal = new DeleteChatModal({
            title: "Удалить чат?"
        });

        const chatAddUserModal = new ChatAddUser({
            title: "Добавить пользователя"
        });

        const deleteUsersModal = new DeleteUsersModal({
            title: "Удалить пользователя"
        });
         
        const messageInput = new InputOnly({
            name: "message",
            placeholder: "Сообщение",
            type: "text",
            propsInputClass: styles["input-message"],
        });

        const button = new Button({
            children: "",
            type: "submit",
            events: {
                click: (event) => {
                    event.preventDefault();
                    const messageElement = messageInput.element as HTMLInputElement;
                    const error = validateData({message: messageElement.value});
                    if (error === "") {
                        MessagesController.sendMessage(messageElement.value);
                        messageElement.value = "";
                    }
                }
            },
            class: styles["message-button"]
        });

        const addChatButton = new Button({
            children: "",
            events: {
                click: () => {
                    chatAddModal.show();
                }
            },
            class: styles["add-chat-button"]
        });

        const deleteChatButton = new Button({
            children: "",
            events: {
                click: () => {
                    deleteChatModal.show();
                }
            },
            class: styles["delete-chat-button"]
        });

        const addUserButton = new Button({
            children: "",
            events: {
                click: () => {
                    chatAddUserModal.show();
                }
            },
            class: styles["add-user-button"]
        });

        const deleteUserButton = new Button({
            children: "",
            events: {
                click: () => {
                    deleteUsersModal.show();
                }
            },
            class: styles["delete-user-button"]
        });

        super({
            rightColClass: styles["right-col"],
            headerClass: styles.header,
            avatarClass: styles.avatar,
            userClass: styles.user,
            messagesClass: styles.messages,
            footerClass: styles.footer,
            inputMessageClass: styles["input-message"],
            button,
            messageInput,
            title: props.title,
            messages: props.messages,
            addChatButton,
            deleteChatButton,
            addUserButton,
            deleteUserButton,
            chatAddModal,
            deleteChatModal,
            chatAddUserModal,
            deleteUsersModal
        });
    }

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        if (newProps?.chat) {
            this.props.title = newProps.chat.title;
        }
        if (newProps?.messages) {
            this.children.messages = newProps.messages.map((message: any) => {
                const newMessageProps = {
                    ...message,
                    userMessage: message.user_id === Store.getState().user.id
                };
                return new Message(newMessageProps);
            });
        } else {
            this.children.messages = [];
        }
        if (newProps?.chat === null) this.props.title = "";
        return true;
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export const ChatWindowComponent = connect((state) => {
    return {
        chats: state.chats,
        chat: state.chat,
        messages: state.messages
    };
}
)(ChatWindow);
