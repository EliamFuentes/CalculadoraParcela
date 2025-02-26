import { useNavigate } from "react-router-dom";
import useFormValidation from "../hooks/useFormValidation";
import '../styles/components/formulario.css'
import Header from "./Header"
import Footer from "./Footer";


const Formulario = () => {
    const navigate = useNavigate();
    const { userForm, errors, handleChange, validateForm } = useFormValidation({
        nome: "",
        email: "",
        telefone: "",
        dataNascimento: "",
    });


    const handleSubmit = () => {
        if (!validateForm()) return;

        const formData = {
            nome: userForm.nome,
            email: userForm.email,
            telefone: userForm.telefone,
            dataNascimento: userForm.dataNascimento
        }

        localStorage.setItem("userData", JSON.stringify(formData))

        navigate("/calculadora");
    };

    return (
        <>
            <Header />
            <div className="formulario-container">
                <h1>Contato</h1>
                <h3>Preencha as informações de contato</h3>
                <div className="form-group">
                    <label>Nome Completo</label>
                    <input
                        className={errors?.nome && "input-error"}
                        type="text"
                        placeholder="Seu nome"
                        name="nome"
                        value={userForm.nome}
                        onChange={handleChange}
                    />
                    {errors?.nome && <p className="error-message">{errors?.nome}</p>}
                </div>

                <div className="form-group">
                    <label>E-mail</label>
                    <input
                        className={errors?.email && "input-error"}
                        type="email"
                        placeholder="Seu e-mail"
                        name="email"
                        value={userForm.email}
                        onChange={handleChange}
                    />
                    {errors?.email && <p className="error-message">{errors?.email}</p>}
                </div>

                <div className="form-group">
                    <label>Telefone</label>
                    <input
                        className={errors?.telefone && "input-error"}
                        type="text"
                        placeholder="(XX) XXXXX-XXXX"
                        name="telefone"
                        value={userForm.telefone}
                        onChange={handleChange}
                    />
                    {errors?.telefone && <p className="error-message">{errors?.telefone}</p>}
                </div>

                <div className="form-group">
                    <label>Data de Nascimento</label>
                    <input
                        className={errors?.dataNascimento && "input-error"}
                        type="date"
                        name="dataNascimento"
                        value={userForm.dataNascimento}
                        onChange={handleChange}
                    />
                    {errors?.dataNascimento && <p className="error-message">{errors?.dataNascimento}</p>}
                </div>

                <div className="form-group">
                    <button onClick={handleSubmit}>Enviar</button>
                </div>
                <Footer />
            </div>

        </>
    );
};

export default Formulario;
