import validateData from "./validateData";

const validate = (event: Event): void => {
    const inputs = (<HTMLElement>(<HTMLElement>event.target).parentNode).querySelectorAll("input");
    const errors: Record<string, string> = {};

    inputs.forEach((input: HTMLInputElement) => {
        const fieldName = input.name;
        const fieldValue = input.value;
        const errorMessages = validateData({[fieldName]: fieldValue});
  
        if (errorMessages) {
            errors[fieldName] = errorMessages;
            const errorSpan = document.querySelectorAll(`[field="${input.name}"]`)[0];
            errorSpan.textContent = errors[fieldName];
        } else {
            const errorSpan = document.querySelectorAll(`[field="${input.name}"]`)[0];
            errorSpan.textContent = "";
        }
    });
};

export const validatePasswords = (password: string, password_repeat: string, field: string) => {
    const errorMessage = validateData({["password"]: password,
        ["password_repeat"]: password_repeat});

    if (errorMessage) {
        const errorSpan = document.querySelectorAll(`[field="${field}"]`)[0];
        errorSpan.textContent = errorMessage;
    } else {
        const errorSpan = document.querySelectorAll(`[field="${field}"]`)[0];
        errorSpan.textContent = "";
    }
    return errorMessage;
};

export default validate;
