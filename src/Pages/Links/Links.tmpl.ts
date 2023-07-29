export const template = `
    <main>
        <div class="{{wrapperClass}}">
            <div class="{{linksClass}}">
                <h2 class="{{titleClass}}">
                    {{titleText}}
                </h2>
                <nav>
                    <ul class="{{pageLinksClass}}">
                        <li>
                            {{{link404}}}
                        </li>
                        <li>
                            {{{link500}}}
                        </li>
                        <li>
                            {{{linkLogin}}}
                        </li>
                        <li>
                            {{{linkReg}}}
                        </li>
                        <li>
                            {{{linkProf}}}
                        </li>
                        <li>
                            {{{linkChat}}}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
`;
