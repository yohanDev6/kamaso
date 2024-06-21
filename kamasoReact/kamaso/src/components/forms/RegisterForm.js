import React, { useState } from 'react'
import './RegisterForms.css';
import axios from 'axios';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        cPassword: '',
    });

    const [errors, setErrors] = useState({});

    // Validação básica do formulário com resposta imediata
    const validation = () => {
        const newErrors = {};

        if (!formData.name.trim() || !formData.username.trim()) {
            newErrors.name = "Os nomes são obrigatórios";
        } else if (formData.name.length < 3 || formData.username.length < 3) {
            newErrors.name = "Os nomes precisam ter pelo menos 3 caracteres";
        }

        if (!formData.email) {
            newErrors.email = "O email é obrigatório";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Este email é inválido';
        }

        if (!formData.password) {
            newErrors.password = 'A senha é obrigatória';
        } else if (!/(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=!]).*/.test(formData.password) || formData.password.length < 8) {
            newErrors.password = 'A senha deve conter pelo menos 8 caracteres, dentre eles 1 número, 1 letra maiúscula e 1 caractere especial';
        }

        if (!formData.cPassword) {
            newErrors.cPassword = 'A confirmação de senha é obrigatória';
        } else if (formData.cPassword !== formData.password) {
            newErrors.cPassword = 'As senhas devem ser idênticas';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    // Atualiza o formulário conforme o usuário preenche os dados
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Envia o formulário para o back-end
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (validation()) {
            try {
                alert("Enviando dados...");
                const res = await axios.post("http://localhost:8080/user/", {
                    name: formData.name,
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                });
    
                console.log('Response Status:', res.status);
                console.log('Response Data:', res.data);
            } catch (error) {
                if (error.response) {
                    // O servidor respondeu com um status diferente de 2xx
                    console.error('Response Error:', error.response.data);
                    console.error('Response Status:', error.response.status);
                    console.error('Response Headers:', error.response.headers);
                } else if (error.request) {
                    // A requisição foi feita, mas não houve resposta
                    console.error('Request Error:', error.request);
                } else {
                    // Algo aconteceu ao configurar a requisição que provocou um erro
                    console.error('Error:', error.message);
                }
                console.error('Config Error:', error.config);
            }
        }
    };

    return (
        <main>
            <div>
                <h2>Registro</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>
                        Nome
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Insira o seu nome'
                        value={formData.name}
                        onChange={handleChange}
                        autoFocus
                        required
                    />
                    {errors.name && <p>{errors.name}</p>}
                    <label htmlFor='username'>
                        Nome de usuário
                    </label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='Crie um nome de usuário válido'
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    {errors.username && <p>{errors.username}</p>}
                    <label htmlFor='email'>
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Insira um email válido'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p>{errors.email}</p>}
                    <label htmlFor='password'>
                        Senha
                    </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Crie uma senha forte'
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p>{errors.password}</p>}
                    <label htmlFor='cPassword'>
                        Confirme a senha
                    </label>
                    <input
                        type='password'
                        id='cPassword'
                        name='cPassword'
                        placeholder='Confirme a senha criada'
                        value={formData.cPassword}
                        onChange={handleChange}
                        required
                    />
                    {errors.cPassword && <p>{errors.cPassword}</p>}
                    <button type='submit'>Registrar-se</button>
                </form>
            </div>
        </main>
    );
}