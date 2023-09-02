import BackArrow from "../../Icons/BackArrow.svg";

export const template = `
    <main>
        <div class="{{wrapperClass}}">
            <div class="{{leftColClass}}">
                <a href="/messenger">
                    <img src="${BackArrow}" alt="Back arrow">
                </a>
            </div>
            <div class="{{rightColClass}}">
                <div class="{{avatarBlockClass}}">
                    {{{profileAvatar}}}
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
        {{{passwordNotification}}}
        {{{profileNotification}}}
        {{{avatarModal}}}
    </main>
`;
