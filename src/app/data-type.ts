export interface SignUp{
    name: string,
    email: string,
    password: string
}
export interface LogIn{
    email: string,
    password: string
}
export interface Product{
    id: number,
    name: string,
    price: number,
    category: string,
    color: string,
    description: string,
    image: string
}