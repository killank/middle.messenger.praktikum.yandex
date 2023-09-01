export const template = `
    <div class="{{wrapperClass}}">
        <div class="{{avatarClass}}">
            {{#if avatar}}
                <img src="{{avatar}}" alt="Avatar" class="{{avatarClass}}"/>
            {{/if}}
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
