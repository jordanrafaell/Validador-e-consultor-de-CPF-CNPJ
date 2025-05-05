// inputCpfCnpj.tsx
'use client';
import { useState } from 'react';
import { validarCampo } from '@/utils/validador';
import receitaWS from '@/app/api/validar/routes';

export default function Input() {
  const [inputValue, setInputValue] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleValidation = () => {
    const resultado = validarCampo(inputValue);
    setValidationMessage(resultado);
    if (resultado === 'CNPJ Válido'){
      receitaWS(inputValue, setValidationMessage);
    }
  };
  

    return (
      <div className="flex flex-col items-center justify-center gap-10">
        <input
          type="text"
          placeholder="Digite o CPF/CNPJ"
          className="border-2 border-black-300 rounded-md p-2"
          id="input"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 text-white rounded-md p-2 ml-2"
          id="btn"
          onClick={handleValidation}
        >
          Validar
        </button>

        <span>{`mensagem de validação: ${validationMessage}`}</span>
      </div>
    );
}
