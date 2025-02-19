export interface LoginUser {
    email: string,
    password: string,
}

export interface CreateUser extends LoginUser {
    name: string,
}

export interface User {
    id: number,
    name: string,
    email: string,
}
