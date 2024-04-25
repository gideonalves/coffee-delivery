import axios from "axios";

export async function searchCep(cep: string) {
  return await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}