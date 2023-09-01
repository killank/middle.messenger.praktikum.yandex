export const template = `
    <div class="{{rightColClass}}">
        <header class="{{headerClass}}">
            <div class="{{userInfoClass}}">
                <div class="{{avatarClass}}">

                </div>
                <span class="{{userClass}}">
                    {{title}}
                </span>
            </div>
            <div>
                {{{addChatButton}}}
                {{#if title}}
                    {{{deleteChatButton}}}
                    {{{addUserButton}}}
                    {{{deleteUserButton}}}
                {{/if}}
            </div>
        </header>
        {{#if title}}
            <div class="{{messagesClass}}">
                {{#each messages}}
                    {{{this}}}
                {{/each}}
            </div>
            <form class="{{footerClass}}">
                {{{messageInput}}}
                {{{button}}}
            </form>
        {{/if}}
        {{{chatAddModal}}}
        {{{deleteChatModal}}}
        {{{chatAddUserModal}}}
        {{{deleteUsersModal}}}
    </div>
`;
