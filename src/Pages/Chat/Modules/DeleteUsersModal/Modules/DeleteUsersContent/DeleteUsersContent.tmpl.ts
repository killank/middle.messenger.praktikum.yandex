export const template = `
    <form class="{{formClass}}">
        {{{closeButton}}}
        <h2 class="{{titleClass}}">
            {{titleText}}
        </h2>
        <ul class="{{usersClass}}">
            {{#each chatUsers}}
                <li>
                    {{{this}}}
                </li>
            {{/each}}
        </ul>
    </form>
`;
