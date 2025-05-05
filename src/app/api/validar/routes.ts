// routes.ts
import libs from "@/utils/imports/import";
const { axios } = libs;

async function receitaWS(inputValue: string, setValidationMessage: (msg: string) => void) {
  const url = `https://receitaws.com.br/v1/cnpj/${inputValue}`;

  try {
    const response = await axios.get(url);
    const status = response.data.status;
    if (status === 'ERROR') {
      setValidationMessage('CNPJ Inválido');
    } else if (status === 'OK') {
      setValidationMessage('CNPJ Válido');
    }
  } catch (error) {
    console.log(error, 'erro');
  }
}
export default receitaWS;