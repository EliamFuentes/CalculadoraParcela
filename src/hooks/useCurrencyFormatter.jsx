import { useState } from "react";

export const useCurrencyFormatter = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const formatCurrency = (inputValue) => {
        let cleanedValue = inputValue.replace(!/^\(\d{2}\) \d{5}-\d{4}$/, "");

        if (cleanedValue === "") return "";

        if (cleanedValue.indexOf(",") !== -1 || cleanedValue.indexOf(".") !== -1) {
            cleanedValue = cleanedValue.replace(",", ".");
        }

        let formattedValue = (parseFloat(cleanedValue) / 100).toFixed(2);
        return formattedValue.replace(".", ",");
    };

    const handleChange = (e) => {
        const formattedValue = formatCurrency(e.target.value);
        setValue(formattedValue);
    };

    return {
        value,
        handleChange,
    };
};
