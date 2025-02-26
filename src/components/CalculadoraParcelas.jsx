import useFormValidation from "../hooks/useFormValidation";
import ModalResultado from "./ModalResultado";
import { useState, useEffect } from "react";
import Header from "./Header"
import Footer from "./Footer";

const CalculadoraParcelas = () => {
    const { userForm, errors, handleChange, validateForm } = useFormValidation({
        valorTotalDivida: "",
        valorParcelaDivida: "",
        numeroTotalParcelas: "",
        numeroParcelasPagas: "",
    });

    const [isModalOpen, setModalOpen] = useState(false);
    const [resultado, setResultado] = useState(0);


    useEffect(() => {
        const savedUserData = localStorage.getItem("userData");
        if (savedUserData) {
            console.log("Dados recuperados do LocalStorage:", JSON.parse(savedUserData));
        }
    }, []);

    const handleSubmit = () => {
        if (!validateForm()) return;

        const valorParcela = parseFloat(userForm.valorParcelaDivida);

        if (!isNaN(valorParcela)) {
            const resultadoCalculado = (valorParcela / 2) + 7.50;
            setResultado(resultadoCalculado);
            setModalOpen(true);

            const formData = {
                novaParcela: resultadoCalculado
            };


            localStorage.setItem("calculoParcelas", JSON.stringify(formData));

            console.log(formData);
        }
    };

    return (
        <>
            <Header />
            <div className="formulario-container">
                <h1>Cálculo de Parcelas</h1>
                <h3>Preencha os campos abaixo</h3>
                <div className="form-group">
                    <label>Valor Total da Dívida</label>
                    <input
                        className={errors?.valorTotalDivida && "input-error"}
                        name="valorTotalDivida"
                        value={userForm.valorTotalDivida}
                        onChange={handleChange}
                        placeholder="exemplo: 100,00"
                        type="number"
                    />
                    {errors?.valorTotalDivida && <p className="error-message">{errors.valorTotalDivida}</p>}
                </div>

                <div className="form-group">
                    <label>Valor da Parcela</label>
                    <input
                        className={errors?.valorParcelaDivida && "input-error"}
                        name="valorParcelaDivida"
                        value={userForm.valorParcelaDivida}
                        onChange={handleChange}
                        placeholder="exemplo: 100,00"
                        type="number"
                    />
                    {errors?.valorParcelaDivida && <p className="error-message">{errors.valorParcelaDivida}</p>}
                </div>

                <div className="form-group">
                    <label>Número total de parcelas</label>
                    <input
                        className={errors?.numeroTotalParcelas && "input-error"}
                        name="numeroTotalParcelas"
                        value={userForm.numeroTotalParcelas}
                        onChange={handleChange}
                        placeholder="exemplo: 12"
                        type="number"
                    />
                    {errors?.numeroTotalParcelas && <p className="error-message">{errors.numeroTotalParcelas}</p>}
                </div>

                <div className="form-group">
                    <label>Número de parcelas pagas</label>
                    <input
                        className={errors?.numeroParcelasPagas && "input-error"}
                        name="numeroParcelasPagas"
                        value={userForm.numeroParcelasPagas}
                        onChange={handleChange}
                        placeholder="exemplo: 6"
                        type="number"
                    />
                    {errors?.numeroParcelasPagas && <p className="error-message">{errors.numeroParcelasPagas}</p>}
                </div>

                <div className="form-group">
                    <button onClick={handleSubmit}>Calcular</button>
                </div>

                <ModalResultado isOpen={isModalOpen} onClose={() => setModalOpen(false)} resultado={resultado} />
                <Footer />
            </div>
        </>
    );
};

export default CalculadoraParcelas;
