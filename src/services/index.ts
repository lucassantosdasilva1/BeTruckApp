import axios from 'axios';

export interface DTO {
    id: number;
    title: string,
    type: string,
    description: string,
    filename: string,
    height: number,
    width: number,
    price: number,
    rating: number
}


export interface EditProps {
    title: string,
    type: string,
    price: number,
}

const api = axios.create({ baseURL: 'https://api-betruck.herokuapp.com/' })
//const api = axios.create({ baseURL: 'http://192.168.1.42:8080' })

export async function getProducts(): Promise<{data : DTO[]}> {
    return api.get('/products');
}

export async function sendEditProduct(id : Number, data : EditProps) {
    try {
        const {status} = await api.put(`/products/${id}/`, data);
        return console.log(status)
    } catch (error) {
        
    }
}