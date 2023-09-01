import Settings from "../../../../Icons/Settings.svg";

export const template = `
    <div class="{{leftColClass}}">
        <div class="{{searchBlockClass}}">
            <a href="/settings">
                <img src="${Settings}" alt="Settings button">
            </a>
            {{{searchInput}}}
        </div>
        {{#each chatsUser}}
            {{{this}}}
        {{/each}}
    </div>
`;
