import {template} from "./AddUserContent.tmpl.ts";
import styles from "./AddUserContent.module.less";
import Block from "../../../../../../Utils/Block.ts";
import {Input} from "../../../../../../Components/index.ts";
import UserController from "../../../../../../Controllers/UserController.ts";
import connect from "../../../../../../Utils/connect.ts";
import {User} from "../../../../../../types.ts";
import SearchUser from "../..//Modules/SearchUser/SearchUser.ts";
import ChatController from "../../../../../../Controllers/ChatController.ts";
import Store from "../../../../../../Utils/Store.ts";
import CloseButton from "../../../../../../Components/CloseButton/CloseButton.ts";

type AddUserContentProps = {
    users: User,
    title: string,
    closeButton: CloseButton,
}

class AddUserContent extends Block {

    constructor(props: AddUserContentProps) {

        const userAddInput = new Input({
            name: "username",
            placeholder: "Введите имя пользователя",
            type: "text",
            label: "Имя пользователя",
            events: {
                keyup: (event: Event) => {
                    const value = (event.target as HTMLInputElement).value;
                    UserController.getUsers(value);
                }
            }
        });

        super({
            formClass: styles.form,
            titleClass: styles.title,
            userAddInput,
            titleText: props.title,
            users: props.users,
            usersClass: styles.users,
            closeButton: props.closeButton
        });
    }

    createUsersComponent(users: User[] | undefined) {
        if (!users) {
            return [];
        } else {
            return users.map((user) => {
                return new SearchUser({
                    login: user.login,
                    events: {
                        click: () => {
                            ChatController.addUsersToChat(user.id, Store.getState().chat.id);
                        }
                    }
                });
            });
        }
    }

    componentDidUpdate(oldProps: any, newProps: any): boolean {
        this.children.users = this.createUsersComponent(newProps.users);
        return true;
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}
export const AddUserContentComponent = connect((state) => {
    return {
        users: state.users,
    };
}
)(AddUserContent);
