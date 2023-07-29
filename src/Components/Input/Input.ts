import {template} from "./Input.tmpl.ts";
import styles from "./Input.module.less";
import Block from "../../Utils/Block.ts";
import InputOnly from "./Input/InputOnly.ts";

type InputProps = {
    placeholder: string,
    name: string,
    type: string,
    label?: string,
    class?: string,
    events?: Record<string, (event: Event) => void>,
}

class Input extends Block {
    constructor(props: InputProps) {

        const input = new InputOnly({
            name: props.name,
            placeholder: props.placeholder,
            type: props.type,
            propsInputClass: props.class,
            events: props.events,
        });

        super({
            labelText: props.label,
            labelClass: styles.label,
            input
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default Input;
