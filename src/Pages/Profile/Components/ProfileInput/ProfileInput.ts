import {template} from "./ProfileInput.tmpl.ts";
import styles from "./ProfileInput.module.less";
import Block from "../../../../Utils/Block.ts";

type InputProps = {
    placeholder: string,
    name: string,
    type: string,
    label?: string,
    class?: string,
    events?: Record<string, (event: Event) => void>,
    userInfo: string,
}

class ProfileInput extends Block {
    constructor(props: InputProps) {

        super({
            labelText: props.label,
            labelClass: styles.label,
            errorClass: styles.error,
            fieldError: props.name,
            wrapperClass: styles.wrapper,
            field: props.name,
            name: props.name,
            inputClass: styles.input,
            type: props.type,
            placeholder: props.placeholder,
            value: props.userInfo
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default ProfileInput;
