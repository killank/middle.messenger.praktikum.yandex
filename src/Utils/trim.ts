const trim = (inputString: string, charsToRemove: string = " ") => {
    const regex = new RegExp(`^[${charsToRemove}]+|[${charsToRemove}]+$`, "g");
    return inputString.replace(regex, "");
};

export default trim;
