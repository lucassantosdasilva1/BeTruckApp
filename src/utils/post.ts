import { DTOsemid, postProducts } from "../services/index";
import { arrayProducts } from "./products";

export async function AdicionaProdutos() {
  function jsonToArray(json) {
    let array = [];
    for (let key in json) {
      array.push(json[key]);
    }
    return array;
  }

  const meuarray : DTOsemid[] = jsonToArray(arrayProducts);

  meuarray.forEach((element) => {
      try {
        postProducts(element);     
      } catch (error) {
        
      }
     
  });
}