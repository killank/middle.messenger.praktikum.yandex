import {template} from "./DeleteUsersModal.tmpl.ts";
import styles from "./DeleteUsersModal.module.less";
import Block from "../../../../Utils/Block.ts";
import {DeleteUsersContentComponent} from "./Modules/DeleteUsersContent/DeleteUsersContent.ts";
import CloseButton from "../../../../Components/CloseButton/CloseButton.ts";

type DeleteUsersModalProps = {
    title: string,
}

class DeleteUsersModal extends Block {

    constructor(props: DeleteUsersModalProps) {

        const closeButton = new CloseButton({
            class: styles.close,
            events: {
                click: (event) => {
                    event.preventDefault();
                    this.hide();
                }
            }
        });

        const deleteUsersContent = new DeleteUsersContentComponent({
            title: props.title,
            closeButton
        });

        super({
            titleText: props.title,
            wrapperClass: styles.wrapper,
            deleteUsersContent,
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default DeleteUsersModal;
