export function validateCNPJ(cnpj: string): boolean {
    // Remover caracteres não numéricos do CNPJ
    cnpj = cnpj.replace(/\D/g, '');

    // Verificar se o CNPJ possui 14 dígitos
    if (cnpj.length !== 14) {
        return false;
    }

    // Verificar se todos os dígitos são iguais
    if (/^(\d)\1+$/.test(cnpj)) {
        return false;
    }

    // Validar o CNPJ utilizando o algoritmo
    const digits = cnpj.split('').map(Number);
    const mod = (length: number) => digits.reduce((s, digit, index) => s + digit * (length - index), 0) % 11;
    const validateDigit = (length: number, positions = length - 7) =>
        mod(length) < 2 ? 0 : 11 - mod(length);

    if (
        validateDigit(12, 9) !== digits[12] ||
        validateDigit(13, 10) !== digits[13]
    ) {
        return false;
    }

    return true;
}