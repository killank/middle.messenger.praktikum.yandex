import {template} from "./InputOnly.tmpl.ts";
import styles from "./InputOnly.module.less";
import Block from "../../../Utils/Block.ts";

type InputOnlyProps = {
    placeholder: string,
    name: string,
    type: string,
    propsInputClass?: string,
    events?: Record<string, (event: Event) => void>,
}

class InputOnly extends Block {

    constructor(props: InputOnlyProps) {
        super(props);
    }

    render() {
        return this.compile(template, {
            events: this.props.events,
            name: this.props.name,
            type: this.props.type,
            placeholder: this.props.placeholder,
            inputClass: styles.input,
            propsInputClass: this.props.propsInputClass
        });
    }
}

export default InputOnly;
