export function documentValidator(cpf: string): boolean {

    // Remover caracteres não numéricos do CPF
    cpf = cpf.replace(/\D/g, '');

    // Verificar se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
        return false;
    }

    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    // Validar o CPF utilizando o algoritmo
    const digits = cpf.split('').map(Number);
    const mod = (length: number) => digits.slice(0, length).reduce((s, digit, index) => s + digit * (length + 1 - index), 0) % 11;
    const validateDigit = (length: number) => (mod(length) < 2 ? 0 : 11 - mod(length));

    if (validateDigit(9) !== digits[9] || validateDigit(10) !== digits[10]) {
        return false;
    }

    return true;
}