export const template = `
    <div class="{{wrapperClass}}">
        {{#if labelText}}
                <label class="{{labelClass}}">
                    {{labelText}}
                </label>
        {{/if}}
        {{{input}}}
        <span class="{{errorClass}}" field={{field}}></span>
    </div>
`;
