"use client";

import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "../FormLogin/FormLogin.css";

export default function FormLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter(); 

    const notifyError = (message: string) => toast(message, { autoClose: 2000, type: 'error', theme: 'colored' });
    const notifySuccess = () => toast("Login realizado com sucesso!", { autoClose: 2000, type: 'success', theme: 'colored' });
   
    const validateEmailAndPassword = (email: string, password: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errors: string[] = [];

        if (!emailRegex.test(email)) {
            errors.push("Insira um email válido.");
        }

        if (password.length < 8) {
            errors.push("A senha deve ter no mínimo 8 caracteres.");
        }

        return errors;
    };


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/v1/customers/auth/", {
                email: username,
                password: password,
            });

            const userData = {
                user: response.data.user, 
                token: response.data.token  
            };

            localStorage.setItem("userData", JSON.stringify(userData));
            
            notifySuccess();

            setTimeout(() => {
                router.push("/dashboard");
            }, 2000);

        } catch (error: any) {
            notifyError(error.response.data.error);
            notifyError(error.response.data.error[0].message);
        }
    };
    
    return (

        <div className="page-container">
            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <h1 className="welcome-title">Welcome!</h1>
                    <h2 className="login-subtitle">Acesse o sistema</h2>
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
                    <button className="login-button" type="submit">Entrar</button>
                    <div className="signup-link">
                        <p>
                            Não tem uma conta? <a href="/register">Registrar</a>
                        </p>
                    </div>
                    <ToastContainer />
                </form>
            </div>
            <div className="image-section"/>
        </div>
    );
}
