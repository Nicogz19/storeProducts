import { User } from "../interfaces/user";

const API = 'http://localhost:8080/api';

export const registerRequest = (user: User) => fetch(`${API}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...user })
});