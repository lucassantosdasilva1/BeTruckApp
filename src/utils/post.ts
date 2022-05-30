import { DTOsemid, postProducts } from ".";
import { arrayProducts } from "../services/products";

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
// };

// function rollCall(name, index) {
//     console.log(`Is the number ${index + 1} student - ${name} present? Yes!`)
//     ;}
