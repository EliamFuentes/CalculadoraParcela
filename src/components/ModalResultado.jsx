import PropTypes from "prop-types";
import "../styles/components/modal.css";
import { useNavigate } from "react-router-dom";

const ModalResultado = ({ isOpen, onClose, resultado }) => {

    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleBackClick = () => {
        localStorage.clear()
        console.clear()

        navigate("/");
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-btn" onClick={onClose}>X</button>
                <h2>Resultado do Cálculo</h2>
                <p>O valor final da parcela é: <strong>R$ {resultado?.toFixed(2)}</strong></p>
                <button onClick={handleBackClick}>Início</button>
            </div>
        </div>
    );
};

ModalResultado.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    resultado: PropTypes.number.isRequired,
};

export default ModalResultado;
