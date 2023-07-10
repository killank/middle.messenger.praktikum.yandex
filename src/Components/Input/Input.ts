import Handlebars from 'handlebars';
import InputTmpl from './Input.tmpl.ts';
import styles from './Input.module.less';

const Input = (label: string, name: string, type: string, placeholder: string) => {
    const template = Handlebars.compile(InputTmpl);

    return template({
        labelText: label,
        labelClass: styles.label,
        name,
        type,
        placeholder,
        inputClass: styles.input,
    });
};

export default Input;
