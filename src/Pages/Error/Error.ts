import {template} from "./Error.tmpl.ts";
import styles from "./Error.module.less";
import Block from "../../Utils/Block.ts";
import {Link} from "../../Components/";

type ErrorProps = {
    title: string,
    subtitle: string
}

class Error extends Block {
    constructor(props: ErrorProps) {

        const link = new Link({
            children: "Назад к чатам",
            href: "/messenger"
        });
        
        super({
            wrapperClass: styles.wrapper,
            titleText: props.title,
            subtitleText: props.subtitle,
            titleClass: styles.title,
            subtitleClass: styles.subtitle,
            link
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default Error;
