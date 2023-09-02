import {template} from "./ChatAddModal.tmpl.ts";
import styles from "./ChatAddModal.module.less";
import Block from "../../../../Utils/Block.ts";
import {Button, Input} from "../../../../Components/index.ts";
import ChatController from "../../../../Controllers/ChatController.ts";
import CloseButton from "../../../../Components/CloseButton/CloseButton.ts";

type ChatAddModalProps = {
    title: string,
}

class ChatAddModal extends Block {

    constructor(props: ChatAddModalProps) {

        const closeButton = new CloseButton({
            class: styles.close,
            events: {
                click: (event) => {
                    event.preventDefault();
                    this.hide();
                }
            }
        });

        const chatAddInput = new Input({
            name: "chatname",
            placeholder: "Введите название",
            type: "text",
            label: "Название чата",
        });

        const button = new Button({
            children: "Создать",
            type: "submit",
            events: {
                click: (event) => {
                    event.preventDefault();
                    const chatName = (<HTMLElement>(<HTMLElement>event.target).parentNode).querySelectorAll("input")[0].value;
                    ChatController.addNewChat(chatName);
                    this.hide();
                }
            }
        });

        super({
            titleText: props.title,
            formClass: styles.form,
            wrapperClass: styles.wrapper,
            titleClass: styles.title,
            button,
            chatAddInput,
            closeButton
        });

    }

    render() {        
        return this.compile(template, {
            ...this.props
        });
    }
    
}

export default ChatAddModal;
