
const baseUrl: string = "http://127.0.0.1:5000/api/admin"

export async function getAdmins(): Promise<Admin[]> {
    const response = await fetch(baseUrl + '/admins', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Vous pouvez ajouter des en-têtes d'authentification si nécessaire
        },
    });
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des utilisateurs');
    }

    const data = await response.json();
    return data as Admin[];
}

export async function getAdminByID(idAdmin: number): Promise<Admin>{
    const idAdminString = idAdmin.toString()
    const response = await fetch(baseUrl + `/admins/${idAdminString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération de l'administrateur...")
    }

    const data = await response.json()
    return data as Admin;
}

export async function desactivateAdmin(login:string){
    const response = await fetch(baseUrl + `/admins/${login}/desac`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la desactivation de l'admin...")
    }

    return await response.json();
}

export async function deleteAdmin(login: string): Promise<any>{
    const response = await fetch(baseUrl + `/admins/${login}/del`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la suppression de l'administrateur...")
    }

    const data = await response.json();
    return data;

}

export async function update(registerAdmin: RegisterAdmin, login: string): Promise<Admin | null> {
    const response = await fetch(baseUrl + `/admins/${login}`, {
        method: 'POST', // Utilisez POST pour la mise à jour
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerAdmin)
    });

    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la mise à jour de l'administrateur...");
    }

    // Attendez que la promesse de response.json() soit résolue
    const data = await response.json();

    return data["admin"] as Admin;
}


export interface Admin{
    actif: number,
    adminID: number,
    login: string,
    nom: string,
    password: string,
    prenom: string
}

export interface RegisterAdmin{
    login: string,
    pass: string,
    nom: string,
    prenom: string
}

