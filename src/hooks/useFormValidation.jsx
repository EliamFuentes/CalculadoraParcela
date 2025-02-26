import { useState } from "react";

const useFormValidation = (initialValues) => {
    const [userForm, setUserForm] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleTelefoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 11) {
            value = value.slice(0, 11);
        }

        if (value.length > 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        } else if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length > 0) {
            value = `(${value}`;
        }

        setUserForm((prev) => ({
            ...prev,
            telefone: value,
        }));
    };

    const validateField = (field, value) => {
        let error = null;

        if (!value) {
            error = "campo obrigatório.";
        }

        if (field === "telefone" && value && !/^\(\d{2}\) \d{5}-\d{4}$/.test(value)) {
            error = "Telefone deve ter o formato (XX) XXXXX-XXXX.";
        }

        return error;
    };

    const validateForm = () => {
        const newErrors = {};
        let formIsValid = true;

        for (let field in userForm) {
            const value = userForm[field];
            const error = validateField(field, value);

            if (error) {
                newErrors[field] = error;
                formIsValid = false;
            }
        }

        setErrors(newErrors);
        return formIsValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "telefone") {
            handleTelefoneChange(e);
        } else {
            setUserForm((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    return { userForm, errors, handleChange, validateForm };
};

export default useFormValidation;
