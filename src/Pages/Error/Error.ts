import Handlebars from 'handlebars';
import ErrorTmpl from './Error.tmpl.ts';
import styles from './Error.module.less';

const Error = (title: string, subtitle: string) => {
    const template = Handlebars.compile(ErrorTmpl);

    return template({
        wrapperClass: styles.wrapper,
        titleText: title,
        subtitleText: subtitle,
        titleClass: styles.title,
        subtitleClass: styles.subtitle
    });
};

export default Error;