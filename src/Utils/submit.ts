import validateData from "./validateData";

const submit = (event: Event) => {
    event.preventDefault();
    const inputs = (<HTMLElement>(<HTMLElement>event.target).parentNode).querySelectorAll("input");
    const values: Record<string, string> = {};
    const errors: Record<string, string> = {};

    inputs.forEach((input: HTMLInputElement) => {
        const fieldName = input.name;
        const fieldValue = input.value;
        values[fieldName] = fieldValue;
        const errorMessage = validateData({[fieldName]: fieldValue});
  
        if (errorMessage) {
            errors[fieldName] = errorMessage;
            const errorSpan = document.querySelectorAll(`[field="${input.name}"]`)[0];
            errorSpan.textContent = errors[fieldName];
        } else {
            const errorSpan = document.querySelectorAll(`[field="${input.name}"]`)[0];
            errorSpan.textContent = "";
        }
    });
    
    return {errors,
        values};
};

export default submit;
