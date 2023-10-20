
const baseUrl: string = "http://127.0.0.1:5000/api/user"

export async function getUsers(): Promise<User[]> {
    const response = await fetch(baseUrl + '/users', {
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
    return data as User[];
}

// userService.ts

// Fonction pour effectuer une requête GET pour récupérer un utilisateur par son ID
export async function getUserById(userId: number): Promise<User | null> {
    const response = await fetch(baseUrl + `/users/${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Vous pouvez ajouter des en-têtes d'authentification si nécessaire
        },
    });

    if (!response.ok) {
        if (response.status === 404) {
            // L'utilisateur avec l'ID spécifié n'a pas été trouvé, retournez null.
            return null;
        }
        throw new Error('Erreur lors de la récupération de l\'utilisateur par ID');
    }

    const data = await response.json();
    return data["user"] as User;
}

export async function createUser(newUser: RegisterUser): Promise<User> {
    const response = await fetch(baseUrl + '/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Vous pouvez ajouter des en-têtes d'authentification si nécessaire
        },
        body: JSON.stringify(newUser),
    });

    if (!response.ok) {
        throw new Error('Erreur lors de la création de l\'utilisateur');
    }

    const data = await response.json();
    return data["user"] as User;
}


export async  function login(loginUser:LoginUser): Promise<User>{
    const response = await fetch(baseUrl + '/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    });

    if (!response.ok){
        throw new Error("Erreur lors de la connexion de l'utilisateur...");
    }
    return await response.json();
}


export async function logout(token: string){
    const response = await fetch(baseUrl + '/users/logout', {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'token': token
        }
    });
    if (!response.ok){
        throw new Error('Erreur lors de la déconnexion de l\'utilisateur');
    }

    return await response.json();
}


export async function updateUser(updatedUser: RegisterUser): Promise<User> {
    const response = await fetch(baseUrl + `/users/${updatedUser.adresseEmail}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
            // Vous pouvez ajouter des en-têtes d'authentification si nécessaire
        },
        body: JSON.stringify(updatedUser)
    });

    if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour de l\'utilisateur');
    }

    const data = await response.json();
    return data["user"] as User;
}

export async function deleteUser(email: string) {
    let emailUrl = encodeURI(email)
    const response = await fetch(baseUrl+ `/users/${emailUrl}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la suppression de l'utilisateur...")
    }
    return await response.json();
}



export interface RegisterUser{
    nom: string,
    prenom: string,
    adresseEmail: string,
    motDePasse: string
}

export interface User{
    actif: number,
    adresseEmail: string,
    dateInscription: string,
    motDePasse: string,
    nom: string,
    prenom: string,
    userID: number
}

export interface LoginUser{
    email: string,
    password: string
}


