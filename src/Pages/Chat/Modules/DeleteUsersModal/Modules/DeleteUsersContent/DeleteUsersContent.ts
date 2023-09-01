import {template} from "./DeleteUsersContent.tmpl.ts";
import styles from "./DeleteUsersContent.module.less";
import Block from "../../../../../../Utils/Block.ts";
import connect from "../../../../../../Utils/connect.ts";
import {User} from "../../../../../../types.ts";
import ChatController from "../../../../../../Controllers/ChatController.ts";
import Store from "../../../../../../Utils/Store.ts";
import ChatUser from "../ChatUser/ChatUser.ts";
import CloseButton from "../../../../../../Components/CloseButton/CloseButton.ts";

type DeleteUsersContentProps = {
    chatUsers: User,
    title: string,
    closeButton: CloseButton
}

class DeleteUsersContent extends Block {

    constructor(props: DeleteUsersContentProps) {

        super({
            formClass: styles.form,
            titleClass: styles.title,
            titleText: props.title,
            chatUsers: props.chatUsers,
            usersClass: styles.users,
            closeButton: props.closeButton
        });
    }

    createUsersComponent(chatUsers: User[] | undefined) {
        if (!chatUsers) {
            return [];
        } else {
            return chatUsers.map((user) => {
                return new ChatUser({
                    login: user.login,
                    creator: user.id === Store.getState().user.id,
                    events: {
                        click: () => {
                            if (user.id !== Store.getState().user.id) {
                                ChatController.deleteUsersFromChat(user.id, Store.getState().chat.id);
                            }
                        }
                    }
                });
            });
        }
    }

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        this.children.chatUsers = this.createUsersComponent(newProps.chatUsers);
        return true;
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}
export const DeleteUsersContentComponent = connect((state) => {
    return {
        chatUsers: state.chatUsers,
    };
}
)(DeleteUsersContent);
