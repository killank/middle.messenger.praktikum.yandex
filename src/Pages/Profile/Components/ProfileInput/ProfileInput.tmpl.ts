export const template = `
    <div class="{{wrapperClass}}">
        <label class="{{labelClass}}">
            {{labelText}}
        </label>
        <input class="{{inputClass}}" placeholder="{{placeholder}}" name={{name}} type={{type}} value={{userInfo}}>
        <span class="{{errorClass}}" field={{field}}></span>
    </div>
`;
