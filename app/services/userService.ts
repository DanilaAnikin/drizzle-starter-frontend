import { CreateUser, LoginUser } from "../types";

export const getUsers = async(limit: number = 50, page: number = 1, orderBy: string = 'id', order: string = 'asc') => {
    const token = localStorage.getItem('authToken');

    const response = await fetch(`http://localhost:6969/user?limit=${limit}&page=${page}&orderBy=${orderBy}&order=${order}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return response.json();
};

export const getLoggedUser = async(token: string) => {
    const response = await fetch('http://localhost:6969/user/get-logged-user', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to get user");
    }

    return await response;
}

export const createUser = async(data: CreateUser) => {
    const response = await fetch("http://localhost:6969/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create user");
    }
    return response.json();
};

export const loginUser = async(data: LoginUser) => {
    const response = await fetch("http://localhost:6969/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to login");
    }

    return response;
};

export const userLogged = () => {
    if (typeof window === 'undefined') return false;
    const token = localStorage.getItem('authToken');
    
    return token ? true : false;
}
