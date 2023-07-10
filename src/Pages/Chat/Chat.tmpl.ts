import ChatUser from './Modules/ChatUser/ChatUser';
import Settings from '../../Icons/Settings.svg';
import Menu from '../../Icons/Menu.svg';
import Upload from '../../Icons/Upload.svg';
import SendMessage from '../../Icons/SendMessage.svg';
import {Input} from '../../Components';

export default `
    <div class="{{wrapperClass}}">
        <div class="{{leftColClass}}">
            <div class="{{searchBlockClass}}">
                <a href="/profile">
                    <img src="${Settings}" alt="">
                </a>
                ${Input("", "search", "text", "Поиск")}
            </div>
            ${ChatUser("Вадим", "Привет!", "аватар", "10:43", 4)}
        </div>
        <div class="{{rightColClass}}">
            <header class="{{headerClass}}">
                <div class="{{userInfoClass}}">
                    <div class="{{avatarClass}}">

                    </div>
                    <span class="{{userClass}}">
                        Вадим
                    </span>
                </div>
                <div>
                    <img src="${Menu}" alt="">
                </div>
            </header>
            <div class="{{messagesClass}}">

            </div>
            <div class="{{footerClass}}">
                <img src="${Upload}" alt="">
                <div class="{{inputMessageClass}}">
                    Сообщение
                </div>
                <img src="${SendMessage}" alt="">
            </div>
        </div>
    </div>
`;