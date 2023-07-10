import Handlebars from 'handlebars';
import LinkTmpl from './Link.tmpl.ts';
import styles from './Link.module.less';

const Link = (children: string, href: string) => {
    const template = Handlebars.compile(LinkTmpl);

    return template({
        children,
        class: styles.link,
        href
    });
};

export default Link