import {template} from "./AvatarModal.tmpl.ts";
import styles from "./AvatarModal.module.less";
import Block from "../../../../Utils/Block.ts";
import {Button} from "../../../../Components/index.ts";
import UserController from "../../../../Controllers/UserController.ts";
import AuthController from "../../../../Controllers/AuthController.ts";
import CloseButton from "../../../../Components/CloseButton/CloseButton.ts";

type AvatarModalProps = {
    title: string,
}

class AvatarModal extends Block {

    constructor(props: AvatarModalProps) {

        const closeButton = new CloseButton({
            class: styles.close,
            events: {
                click: () => {
                    this.hide();
                }
            }
        });

        const button = new Button({
            children: "Поменять",
            type: "submit",
            events: {
                click: (event) => {
                    event.preventDefault();
                    const fileInput = document.querySelector("#avatarInput") as HTMLInputElement;
                    if (fileInput && fileInput.files && fileInput.files.length > 0) {
                        const file = fileInput.files[0];
        
                        const formData = new FormData();
                        formData.append("avatar", file);
                        
                        UserController.changeAvatar(formData);
                        AuthController.getUser();
                        fileInput.value = "";
                        
                        this.hide();
                    } else {
                        console.log("Файл не выбран");
                        this.hide();
                    }
                }
            }
        });
        super({
            titleText: props.title,
            formClass: styles.form,
            wrapperClass: styles.wrapper,
            titleClass: styles.title,
            button,
            closeButton
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default AvatarModal;
