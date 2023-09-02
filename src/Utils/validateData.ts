type UserData = {
    first_name?: string;
    second_name?: string;
    login?: string;
    email?: string;
    password?: string;
    password_repeat?: string;
    phone?: string;
    message?: string;
    oldPassword?: string;
    newPassword?: string;
    newPasswordRepeat?: string;
}
  
function isValidName(name: string): boolean {
    const nameRegex = /^[А-ЯЁA-Zа-яёa-z\- ]+$/;
    return nameRegex.test(name);
}
  
function isValidLogin(login: string): boolean {
    const loginRegex = /^(?!^\d+$)[\w-]{3,20}$/;
    return loginRegex.test(login);
}
  
function isValidEmail(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}
  
function isValidPassword(password: string): boolean {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
    return passwordRegex.test(password);
}
  
function isValidPhone(phone: string): boolean {
    const phoneRegex = /^\+?\d{10,15}$/;
    return phoneRegex.test(phone);
}
  
function isValidMessage(message: string): boolean {
    return message !== "";
}
  
function validateData (data: UserData): string {
    let error: string = "";
  
    if (data.first_name !== undefined && !isValidName(data.first_name)) {
        error = "Имя должно содержать только буквы, дефисы и пробелы.";
    }
  
    if (data.second_name !== undefined && !isValidName(data.second_name)) {
        error =  "Фамилия должна содержать только буквы, дефисы и пробелы.";
    }
  
    if (data.login !== undefined && !isValidLogin(data.login)) {
        error = "Логин должен быть от 3 до 20 символов и содержать только буквы, цифры, дефис и нижнее подчеркивание.";
    }
  
    if (data.email !== undefined && !isValidEmail(data.email)) {
        error = "Неправильный формат email.";
    }
  
    if (data.password !== undefined && !isValidPassword(data.password)) {
        error = "Пароль должен содержать от 8 до 40 символов и хотя бы одну заглавную букву и цифру.";
    }

    if (data.password_repeat !== undefined && !isValidPassword(data.password_repeat)) {
        error = "Пароль должен содержать от 8 до 40 символов и хотя бы одну заглавную букву и цифру.";
    }

    if (data.password_repeat !== undefined && data.password !== undefined && data.password !== data.password_repeat) {
        error = "Пароли не совпадают";
    }

    if (data.newPassword !== undefined && !isValidPassword(data.newPassword)) {
        error = "Пароль должен содержать от 8 до 40 символов и хотя бы одну заглавную букву и цифру.";
    }

    if (data.newPasswordRepeat !== undefined && !isValidPassword(data.newPasswordRepeat)) {
        error = "Пароль должен содержать от 8 до 40 символов и хотя бы одну заглавную букву и цифру.";
    }

    if (data.newPasswordRepeat !== undefined && data.newPassword !== undefined && data.newPassword !== data.newPasswordRepeat ) {
        error = "Пароли не совпадают";
    }

    if (data.oldPassword !== undefined && !isValidPassword(data.oldPassword)) {
        error = "Пароль должен содержать от 8 до 40 символов и хотя бы одну заглавную букву и цифру.";
    }
  
    if (data.phone !== undefined && !isValidPhone(data.phone)) {
        error = "Неправильный формат номера телефона. Допустимы только цифры и символ + в начале.";
    }
  
    if (data.message !== undefined && !isValidMessage(data.message)) {
        error = "Сообщение не должно быть пустым.";
    }
  
    return error;
}

export default validateData;
