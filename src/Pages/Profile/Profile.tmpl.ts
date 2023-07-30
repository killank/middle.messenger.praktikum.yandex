import BackArrow from "../../Icons/BackArrow.svg";
import Image from "../../Icons/Image.svg";

export const template = `
    <main>
        <div class="{{wrapperClass}}">
            <div class="{{leftColClass}}">
                <a href="/chat">
                    <img src="${BackArrow}" alt="Back arrow">
                </a>
            </div>
            <div class="{{rightColClass}}">
                <div class="{{avatarBlockClass}}">
                    <div class="{{avatarClass}}">
                        <img src="${Image}" alt="Avatar">
                    </div>
                    {{{link}}}
                </div>
                <div class="{{editComponentClass}}">
                    <form class="{{formClass}}" name="profile">
                        {{{emailInput}}}
                        {{{loginInput}}}
                        {{{firstNameInput}}}
                        {{{secondNameInput}}}
                        {{{displayNameInput}}}
                        {{{phoneInput}}}
                        {{{profileButton}}}
                    </form>
                    <form class="{{formClass}}" name="password">
                        {{{oldPasswordInput}}}
                        {{{newPasswordInput}}}
                        {{{newPasswordRepeatInput}}}
                        {{{passwordButton}}}
                    </form>
                </div>
            </div>
        </div>
    </main>
`;
