"use client";

import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import "../FormRegister/FormRegister.css";
import '@/components/FormRegister/FormRegister.css';


export default function FormRegister() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const notifyError = (message: string) => toast(message, { autoClose: 2000, type: 'error', theme: 'colored' });
    const notifySuccess = () => toast("Cadastro realizado com sucesso!", { autoClose: 2000, type: 'success', theme: 'colored' });

    
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
        
        const validationErrors = validateEmailAndPassword(username, password);

        if (validationErrors.length > 0) {
            validationErrors.forEach((error) => notifyError(error));
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/v1/customers/create/", {
                name: name,
                email: username,
                password: password,
            });

            notifySuccess();

            setTimeout(() => {
                router.push("/login");
            }, 2000);

        } catch (error) {
            notifyError("Erro ao fazer cadastro. Verifique os dados e tente novamente.");
        }
    };

    return (
        <div className="page-container">
            <div className="form-section">
                <form onSubmit={handleSubmit}>
                    <h1 className="welcome-title">Welcome!</h1>
                    <h2 className="register-subtitle">Faça o cadastro</h2>
                    <div className="input-container">
                        <input
                            className="input-field"
                            type="text"
                            placeholder="Nome"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <FaUser className="icon" color="#651FFF" />
                    </div>
                    <div className="input-container">
                        <input
                            className="input-field"
                            type="email"
                            placeholder="email@exemplo.com"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <FaUser className="icon" color="#651FFF" />
                    </div>
                    <div className="input-container">
                        <input
                            className="input-field"
                            type="password"
                            placeholder="Insira sua senha"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <FaLock className="icon" color="#651FFF" />
                    </div>
                    <button className="button-register" type="submit">Registrar</button>
                    <ToastContainer />
                </form>
            </div>

            <div className="image-section"/>
        </div>
    );
}
