import Handlebars from "handlebars";
import ProfileTmpl from "./Profile.tmpl.ts";
import styles from "./Profile.module.less";

const Profile = () => {
    const template = Handlebars.compile(ProfileTmpl);

    return template({
        wrapperClass: styles.wrapper,
        leftColClass: styles.leftCol,
        rightColClass: styles.rightCol,
        avatarClass: styles.avatar,
        editComponentClass: styles.editComponent,
        formClass: styles.form,
        avatarBlockClass: styles.avatarBlock
    });
};

export default Profile;
