import {template} from "./Input.tmpl.ts";
import styles from "./Input.module.less";
import Block from "../../Utils/Block.ts";

type InputProps = {
    placeholder: string,
    name: string,
    type: string,
    label: string
}

class Input extends Block {
    constructor(props: InputProps) {
        super(props);
    }

    render() {
        return this.compile(template, {
            labelText: this.props.label,
            labelClass: styles.label,
            name: this.props.name,
            type: this.props.type,
            placeholder: this.props.placeholder,
            inputClass: styles.input,
        });
    }
}

export default Input;
