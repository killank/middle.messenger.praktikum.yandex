import {Link} from '../../Components';

export default `
    <main>
        <div class="{{wrapperClass}}">
            <h2 class="{{titleClass}}">
                {{titleText}}
            </h2>
            <span class="{{subtitleClass}}">
                {{subtitleText}}
            </span>
            ${Link("Назад к чатам", "/")}
        </div>
    </main>
`;
