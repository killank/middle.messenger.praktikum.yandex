import {Button, Input, Link} from '../../Components';
import BackArrow from '../../Icons/BackArrow.svg';
import Image from '../../Icons/Image.svg';

export default `
    <div class="{{wrapperClass}}">
        <div class="{{leftColClass}}">
            <img src="${BackArrow}" alt=""> 
        </div>
        <div class="{{rightColClass}}">
            <div class="{{avatarBlockClass}}">
                <div class="{{avatarClass}}">
                    <img src="${Image}" alt="">
                </div>
                ${Link("Выйти", "/")}
            </div>
            <div class="{{editComponentClass}}">
                <form class="{{formClass}}" name="profile">
                    ${Input("Почта", "email", "text", "Введите почту")}
                    ${Input("Логин", "login", "text", "Введите логин")}
                    ${Input("Имя", "first_name", "text", "Введите имя")}
                    ${Input("Фамилия", "second_name", "text", "Введите фамилию")}
                    ${Input("Имя в чате", "display_name", "text", "Введите имя")}
                    ${Input("Телефон", "phone", "text", "Введите телефон")}
                    ${Button("Изменить данные", "submit")}
                </form>
                <form class="{{formClass}}" name="password">
                    ${Input("Старый пароль", "password", "oldPassword", "Введите старый пароль")}
                    ${Input("Новый пароль", "password", "newPassword", "Введите новый пароль")}
                    ${Input("Повторите новый пароль", "password", "newPassword", "Повторите новый пароль")}
                    ${Button("Сохранить пароль", "submit")}
                </form>
            </div>
        </div>
    </div>
`;
