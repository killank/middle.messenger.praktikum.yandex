import validateData from "./validateData";

const submit = (event: Event): void => {
    event.preventDefault();
    const inputs = (<HTMLElement>(<HTMLElement>event.target).parentNode).querySelectorAll("input");
    const values: Record<string, string> = {};
    const errors: Record<string, string> = {};

    inputs.forEach((input: HTMLInputElement) => {
        const fieldName = input.name;
        const fieldValue = input.value;
        values[fieldName] = fieldValue;
        const errorMessages = validateData({[fieldName]: fieldValue});
  
        if (errorMessages) {
            errors[fieldName] = errorMessages;
        }
    });
    
    console.log("form values", values);
    console.log("form errors", errors);
};

export default submit;
