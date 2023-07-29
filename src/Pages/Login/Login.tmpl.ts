export const template = `
    <main>
        <div class="{{wrapperClass}}">
            <form class="{{formClass}}">
                <h2 class="{{titleClass}}">
                    {{titleText}}
                </h2>
                {{{loginInput}}}
                {{{passwordInput}}}
                {{{button}}}
                {{{link}}}
            </form>
        </div>
    </main>
`;
