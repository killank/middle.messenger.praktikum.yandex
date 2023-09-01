import {template} from "./ChatAddUser.tmpl.ts";
import styles from "./ChatAddUser.module.less";
import Block from "../../../../Utils/Block.ts";
import {AddUserContentComponent} from "./Modules/AddUserContent/AddUserContent.ts";
import CloseButton from "../../../../Components/CloseButton/CloseButton.ts";

type ChatAddUserProps = {
    title: string,
}

class ChatAddUser extends Block {

    constructor(props: ChatAddUserProps) {

        const closeButton = new CloseButton({
            class: styles.close,
            events: {
                click: (event) => {
                    event.preventDefault();
                    this.hide();
                }
            }
        });

        const addUserContent = new AddUserContentComponent({
            title: props.title,
            closeButton
        });

        super({
            titleText: props.title,
            wrapperClass: styles.wrapper,
            addUserContent
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default ChatAddUser;
