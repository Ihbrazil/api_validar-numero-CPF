function calcularDigitoVerificador(cpf, pesoInicial) {
  let soma = 0;
  for (let i = 0; i < cpf.length; i++) {
      soma += parseInt(cpf.charAt(i)) * (pesoInicial - i);
  }
  let resto = soma % 11;
  return resto < 2 ? 0 : 11 - resto;
}

export function validarCPF(cpf) {
  cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false; // Verifica se tem 11 dígitos ou se todos os dígitos são iguais

  let primeiroDigito = calcularDigitoVerificador(cpf.substring(0, 9), 10);
  let segundoDigito = calcularDigitoVerificador(cpf.substring(0, 9) + primeiroDigito, 11);

  return primeiroDigito === parseInt(cpf.charAt(9)) && segundoDigito === parseInt(cpf.charAt(10));
}