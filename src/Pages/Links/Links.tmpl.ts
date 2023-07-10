import {Link} from '../../Components';

export default `
    <main>
        <div class="{{wrapperClass}}">
            <div class="{{linksClass}}">
                <h2 class="{{titleClass}}">
                    {{titleText}}
                </h2>
                <nav>
                    <ul class="{{pageLinksClass}}">
                        <li>
                            ${Link("500", "/500")}
                        </li>
                        <li>
                            ${Link("404", "/404")}
                        </li>
                        <li>
                            ${Link("Логин", "/login")}
                        </li>
                        <li>
                            ${Link("Регистрация", "/registration")}
                        </li>
                        <li>
                            ${Link("Профиль", "/profile")}
                        </li>
                        <li>
                            ${Link("Чат", "/chat")}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </main>
`;
