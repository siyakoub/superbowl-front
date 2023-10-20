import {promises} from "dns";

const baseUrl = 'http://127.0.0.1:5000/api/session'


export async function getAllSession(): Promise<Session[]> {
    const response = await fetch(baseUrl + '/sessions', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 404) {
        throw new Error("Aucune session n'a été trouvé...")
    }
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération des sessions...")
    }
    const data = await response.json();
    return data["sessions"] as Session[];
}

export async function getSessionByID(idSession: number) : Promise<Session> {
    let idSessionString = idSession.toString();
    const response = await fetch(baseUrl + `/sessions/${idSessionString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 404) {
        throw new Error("Aucune Session n'a été trouvé...")
    }
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération de la session...");
    }
    const data = await response.json();
    return data["Session"] as Session;
}


export async function getByUserEmail(email: string): Promise<Session[]> {
    let emailUrl = encodeURI(email)
    const response = await fetch(baseUrl + `/sessions/${emailUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 404){
        throw new Error("Aucune sessions trouvé pour cette utilisateur...")
    }
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération des sessions de l'utilisateur...")
    }
    const data = await response.json()
    return data["Sessions"] as Session[];
}

export async function getSessionByToken(token: string) : Promise<Session>{
    const response = await fetch(baseUrl + '/sessions/bytoken', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 404){
        throw new Error("Aucune sessions ne correspond à ce token...")
    }
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération de la sessions...")
    }
    const data = await response.json();
    return data["Session"] as Session;
}

export interface Session {
    dateHeureDebut: string,
    dateHeureFin: string,
    email: string,
    sessionID: string,
    token: string
}
