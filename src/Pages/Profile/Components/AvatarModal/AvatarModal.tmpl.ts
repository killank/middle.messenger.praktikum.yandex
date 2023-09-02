export const template = `
    <div class="{{wrapperClass}}">
        <form class="{{formClass}}">
            {{{closeButton}}}
            <h2 class="{{titleClass}}">
                {{titleText}}
            </h2>
            <input type="file" id="avatarInput"/>
            {{{button}}}
        </form>
    </div>
`;
