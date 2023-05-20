export default function translateUserRole(userData: any) {
    if (userData === "adm") {
        return "Administrador"
    }

    if (userData === "driver") {
        return "Motorista"
    }

    return "Cliente"
}