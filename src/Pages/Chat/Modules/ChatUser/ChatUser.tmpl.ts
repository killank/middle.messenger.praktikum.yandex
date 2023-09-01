export const template = `
    <div class="{{wrapperClass}}">
        <div class="{{avatarClass}}">

        </div>
        <div class="{{textClass}}">
            <div class="{{titleBlockClass}}">
                <span class="{{titleClass}}">
                    {{title}}
                </span>
                <span class="{{timeClass}}">
                    {{time}}
                </span>
            </div>
            <div class="{{messageBlockClass}}">
                <span class="{{messageClass}}">
                    {{last_message}}
                </span>
                {{#if unread_count}}
                    <div class="{{unreadCountClass}}">
                        {{unread_count}}
                    </div>
                {{/if}}
            </div>
        </div>
    </div>
`;
