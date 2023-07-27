export const template = `
    <div>
        {{#if labelText}}
            <label class="{{labelClass}}">
                {{labelText}}
            </label>
        {{/if}}
        <input class="{{inputClass}}" placeholder="{{placeholder}}" name={{name}} type={{type}}>
    </div>
`;
