import Settings from "../../Icons/Settings.svg";
import Menu from "../../Icons/Menu.svg";
import Upload from "../../Icons/Upload.svg";

export const template = `
    <main>
        <div class="{{wrapperClass}}">
            <div class="{{leftColClass}}">
                <div class="{{searchBlockClass}}">
                    <a href="/profile">
                        <img src="${Settings}" alt="Settings button">
                    </a>
                    {{{searchInput}}}
                </div>
                {{{chatUser}}}
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
                        <img src="${Menu}" alt="Menu button">
                    </div>
                </header>
                <div class="{{messagesClass}}">

                </div>
                <form class="{{footerClass}}">
                    <img src="${Upload}" alt="Upload button">
                    {{{messageInput}}}
                    {{{button}}}
                </form>
            </div>
        </div>
    </main>
`;
