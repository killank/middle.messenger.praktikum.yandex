import {template} from "./CloseButton.tmpl.ts";
import styles from "./CloseButton.module.less";
import Block from "../../Utils/Block.ts";

type CloseButtonProps = {
    events?: Record<string, (event: Event) => void>,
    class?: string
}

class CloseButton extends Block {
    constructor(props: CloseButtonProps) {

        super({
            ...props,
            class: styles.button,
            propsClass: props.class
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default CloseButton;
