import {template} from "./Avatar.tmpl.ts";
import styles from "./Avatar.module.less";
import Block from "../../../../Utils/Block.ts";

type AvatarProps = {
    events?: Record<string, (event: Event) => void>,
    avatar: string,
}

class Avatar extends Block {
    constructor(props: AvatarProps) {

        super({
            avatarClass: styles.avatar,
            spanClass: styles.span,
            avatar: props.avatar
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default Avatar;
