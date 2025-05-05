// validador.ts
import libs from './imports/import';
const { cpf, cnpj } = libs;

function validarCampo(valor: string) {
  let isCpfValid = false;
  let isCnpjValid = false;

  const clearString = valor.replace(/[.\-\/]/g, '');
  console.log('valor limpo', clearString);

  if (clearString.length === 11) {
    isCpfValid = cpf.isValid(clearString);
    console.log('CPF válido?', isCpfValid); // Log para verificar se o CPF é válido
  } else if (clearString.length === 14) {
    isCnpjValid = cnpj.isValid(clearString);
    console.log('CNPJ válido?', isCnpjValid); // Log para verificar se o CNPJ é válido
  } else {
    console.log('Comprimento inválido:', clearString.length); // Log caso o comprimento não seja 11 nem 14
  }

  if (isCpfValid) {
    return 'CPF Válido';
  } else if (isCnpjValid) {
    return 'CNPJ Válido';
  } else {
    return 'CPF/CNPJ Inválido';
  }
}

export { validarCampo };
