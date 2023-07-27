import { toast } from "react-hot-toast"

// User
export async function usernameValidate(values){
    const errors = usernameVerify({}, values);
    return errors
}

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username= toast.error('Username required!')
    } else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username')
    }
    return error;
}

// Password
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);
    return errors;
}

function passwordVerify(errors = {}, values){
    // eslint-disable-next-line no-useless-escape
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!values.password){
        errors.password = toast.error("Password Required!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password");
    } else if(values.password.length < 4) {
        errors.password = toast.error("Password must be more than 4 characters");
    } else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special characters");
    }

    return errors;
}

// Validate reset password
export async function resetPassowrd(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password not match")
    }
    return errors;
}