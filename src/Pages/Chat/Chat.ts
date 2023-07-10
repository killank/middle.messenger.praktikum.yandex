import Handlebars from 'handlebars';
import ChatTmpl from './Chat.tmpl.ts';
import styles from './Chat.module.less';

const Chat = () => {
    const template = Handlebars.compile(ChatTmpl);

    return template({
        wrapperClass: styles.wrapper,
        leftColClass: styles.leftCol,
        searchBlockClass: styles.searchBlock,
        rightColClass: styles.rightCol,
        headerClass: styles.header,
        userInfoClass: styles.userInfo,
        avatarClass: styles.avatar,
        userClass: styles.user,
        messagesClass: styles.messages,
        footerClass: styles.footer,
        inputMessageClass: styles.inputMessage
    });
};

export default Chat;