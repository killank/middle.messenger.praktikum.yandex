export const template = `
    <form class="{{formClass}}">
        {{{closeButton}}}
        <h2 class="{{titleClass}}">
            {{titleText}}
        </h2>
        {{{userAddInput}}}
        <ul class="{{usersClass}}">
            {{#each users}}
                <li>
                    {{{this}}}
                </li>
            {{/each}}
        </ul>
    </form>
`;
