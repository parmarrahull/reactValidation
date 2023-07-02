
export default function Validation(values) {
    const errors = {}

    const email_pattern = /^[^\s@]+[^\s@]+\.[^\s@]{2,6}%/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

    if (values.name === "") {
        errors.name = "Name Is Required!";
    }
    if (values.phone === "") {
        errors.phone = "Phone Is Required!";
    }

    if (values.email === "") {
        errors.email = "Email Is Required!";
    }
    else if (!email_pattern.test(values.email)) {
        errors.email = "Email did'nt match"
    }
    if (values.password === "") {
        errors.password = "Password Is Required!";
    }
    else if (!password_pattern.test(values.password)) {
        errors.email = "Password did'nt match"
    }
    return errors

}
