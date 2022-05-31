import axios from "axios";
import { AdicionaProdutos } from "../utils/post";

export interface DTO {
  id: number;
  title: string;
  type: string;
  description: string;
  filename: string;
  height: number;
  width: number;
  price: number;
  rating: number;
  created_at: Date;
}

export interface DTOsemid {
  title: string;
  type: string;
  description: string;
  filename: string;
  height: number;
  width: number;
  price: number;
  rating: number;
}

export interface EditProps {
  title: string;
  type: string;
  price: number;
}

const api = axios.create({ baseURL: "https://api-betruck.herokuapp.com/" });
//const api = axios.create({ baseURL: 'http://192.168.1.42:8080' })

//AdicionaProdutos();

export async function postProducts(data: DTOsemid) {
  const response = await api.post("/products/save", data);
  return response.request.status;
}

export async function getProducts() {
  console.log('passou aqui no get');
  try {
    const result = await api.get("/products");
    console.log(result.status);
    return result.data;
  } catch (error) {
    console.error(error);
  }
}


export async function sendEditProduct(id: Number, data: EditProps) {
  try {
    const { status } = await api.put(`/products/${id}/`, data);
    return console.log("editarStatus:", status);
  } catch (error) {}
}

export async function deleteProduct(id: Number) {
  try {
    const { status, request } = await api.delete(`/products/${id}/`);
    return console.log("status", status, "id: ", request.response);
  } catch (error) {}
}
