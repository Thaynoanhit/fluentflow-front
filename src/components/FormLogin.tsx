"use client"; // Adicione esta linha no topo

import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./FormLogin.css";

export default function FormLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Trate a submissão do formulário aqui

        alert("Enviando os dados " + username + " - " + password);
    };

    return (
        <div className="page-container">
            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome!</h1>
                    <h2>Acesse o sistema</h2>
                    <div className="input-container">
                        <input
                            className="input-field"
                            type="email"
                            placeholder="email@exemplo.com"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <FaUser className="icon" />
                    </div>
                    <div className="input-container">
                        <input
                            className="input-field"
                            type="password"
                            placeholder="Insira sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock className="icon" />
                    </div>
                    <div className="recall-forget">
                        <label>
                            <input type="checkbox" />
                            Lembre de mim?
                        </label>
                        <a href="#">Esqueceu a senha?</a>
                    </div>
                    <button type="submit">Entrar</button>
                    <div className="signup-link">
                        <p>
                            Não tem uma conta? <a href="#">Registrar</a>
                        </p>
                    </div>
                </form>
            </div>
            <div className="image-section">
                {/* Remova a tag <img> se a imagem é aplicada como fundo */}
            </div>
        </div>
    );
}
