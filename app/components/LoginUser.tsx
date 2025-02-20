"use client";
import { useState } from 'react';
import { loginUser } from '../services/userService';

const LoginUser: React.FC<{goRegister: () => void}> = ({ goRegister }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string>('');

    const handleLogin = async () => {
        try {
            const response = await loginUser({ email, password });

            if (!response.ok) {
                throw new Error('Login failed');
            }
            const data = await response.text();
            const token = data || response.headers.get('authorization')?.split(' ')[1];
            if (token) {
                localStorage.setItem('authToken', token);
                alert('Login successful!');
            } else {
                throw new Error('Token not received');
            }
        } catch (err: any) {
            setError(err.message || 'An error occurred during login');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h1>
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full px-4 py-2 mb-4 border rounded-md focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                        onClick={handleLogin}
                        className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                    >
                        Login
                    </button>
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <button onClick={() => goRegister()}>Register</button>
            </div>
        </div>
    );
};

export default LoginUser;
