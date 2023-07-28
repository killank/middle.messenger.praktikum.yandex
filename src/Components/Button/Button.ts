import {template} from "./Button.tmpl.ts";
import styles from "./Button.module.less";
import Block from "../../Utils/Block.ts";

type ButtonProps = {
    type?: "submit",
    children: string,
    events?: Record<string, (event: Event) => void>;
}

class Button extends Block {
    constructor(props: ButtonProps) {
        super(props);
    }

    render() {
        return this.compile(template, {
            ...this.props,
            class: styles.button
        });
    }
}

export default Button;
