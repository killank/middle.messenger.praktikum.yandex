import {template} from "./SearchUser.tmpl.ts";
import styles from "./SearchUser.module.less";
import Block from "../../../../../../Utils/Block.ts";

type SearchUserProps = {
    events?: Record<string, (event: Event) => void>,
    class?: string,
    login: string,
}

class SearchUser extends Block {
    constructor(props: SearchUserProps) {

        super({
            ...props,
            class: styles.user,
            propsClass: props.class,
            login: props.login
        });
    }

    render() {
        return this.compile(template, {
            ...this.props
        });
    }
}

export default SearchUser;
