import Handlebars from 'handlebars';
import LinksTmpl from './Links.tmpl.ts';
import styles from './Links.module.less';

const Links = () => {
    const template = Handlebars.compile(LinksTmpl);

    return template({
        wrapperClass: styles.wrapper,
        titleText: "Ссылки",
        titleClass: styles.title,
        linksClass: styles.links
    });
};

export default Links;
