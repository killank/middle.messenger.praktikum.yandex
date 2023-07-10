import {Link} from '../../Components';

export default `
    <div class="{{wrapperClass}}">
        <span class="{{titleClass}}">
            {{titleText}}
        </span>
        <span class="{{subtitleClass}}">
            {{subtitleText}}
        </span>
        ${Link("Назад к чатам", "/")}
    </div>
`;