import {template} from "./Link.tmpl.ts";
import styles from "./Link.module.less";
import Block from "../../Utils/Block.ts";

type LinkProps = {
    children: string,
    href: string
}

class Link extends Block {
    constructor(props: LinkProps) {
        super(props);
    }

    render() {
        return this.compile(template, {
            children: this.props.children,
            class: styles.link,
            href: this.props.href
        });
    }
}

export default Link;
