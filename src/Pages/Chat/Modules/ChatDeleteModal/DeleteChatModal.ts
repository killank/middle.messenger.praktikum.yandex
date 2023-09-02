import {template} from "./DeleteChatModal.tmpl.ts";
import styles from "./DeleteChatModal.module.less";
import Block from "../../../../Utils/Block.ts";
import {Button} from "../../../../Components/index.ts";
import Store from "../../../../Utils/Store.ts";
import ChatController from "../../../../Controllers/ChatController.ts";
import CloseButton from "../../../../Components/CloseButton/CloseButton.ts";

type DeleteChatModalProps = {
    title: string,
}

class DeleteChatModal extends Block {

    constructor(props: DeleteChatModalProps) {

        const closeButton = new CloseButton({
            class: styles.close,
            events: {
                click: (event) => {
                    event.preventDefault();
                    this.hide();
                }
            }
        });

        const deleteButton = new Button({
            children: "Удалить",
            events: {
                click: (event) => {
                    event.preventDefault();
                    const chat = Store.getState().chat;
                    ChatController.deleteChat(chat.id);
                    this.hide();
                }
            }
        });

        const cancelButton = new Button({
            children: "Отменить",
            type: "submit",
            events: {
                click: (event) => {
                    event.preventDefault();
                    this.hide();
                }
            }
        });

        super({
            titleText: props.title,
            formClass: styles.form,
            wrapperClass: styles.wrapper,
            titleClass: styles.title,
            deleteButton,
            cancelButton,
            closeButton
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default DeleteChatModal;
