export default `
    <div class="{{wrapperClass}}">
        <div class="{{avatarClass}}">

        </div>
        <div class="{{textClass}}">
            <div class="{{titleBlockClass}}">
                <span class="{{userClass}}">
                    {{user}}
                </span>
                <span class="{{timeClass}}">
                    {{time}}
                </span>
            </div>
            <div class="{{messageBlockClass}}">
                <span class="{{messageClass}}">
                    {{last_message}}
                </span>
                {{#if new_messages}}
                    <div class="{{newMessagesClass}}">
                        {{new_messages}}
                    </div>
                {{/if}}
            </div>
        </div>
    </div>
`;