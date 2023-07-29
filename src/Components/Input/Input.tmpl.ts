export const template = `
    <div>
        {{#if labelText}}
                <label class="{{labelClass}}">
                    {{labelText}}
                </label>
        {{/if}}
        {{{input}}}
    </div>
`;
