const baseUrl: string = "http://127.0.0.1:5000/api/match"

export async function getMatch(): Promise<Match[]> {
    const response = await fetch(baseUrl + '/matchs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // Vous pouvez ajouter des en-têtes d'authentification si nécessaire
        },
    });
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des matchs');
    }

    const data = await response.json();
    return data["matchs"] as Match[];
}

export async function getMatchByID(id_match: number): Promise<Match>{
    const idMatchString = id_match.toString();
    const response = await fetch(baseUrl + `/matchs/${idMatchString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Erreur lors de la récupération du match...")
    }

    const data = await response.json();
    return data["match"] as Match;
}

export async function getMatchByTeam(byMatch: ByMatch): Promise<Match[]>{
    const response = await fetch(baseUrl + '/matchs/byteams', {
        method: 'GET',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(byMatch)
    });

    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération des matchs...")
    }

    const data = await response.json();
    return data["match"] as Match[];
}

export async function createMatch(createdMatch: CreatedMatch): Promise<Match>{
    const response = await fetch(baseUrl + '/matchs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(createdMatch)
    })

    if (response.status !== 201){
        throw new Error("Une erreur est survenue lors de la création du match...")
    }

    const data = await response.json();
    return data["match"] as Match;

}

export async function updateMatch(idMatch: number, updatedMatch: CreatedMatch): Promise<Match> {
    const idMatchString = idMatch.toString();
    const response = await fetch(baseUrl + `/matchs/${idMatchString}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedMatch)
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la mise à jour du match...")
    }
    const data = await response.json();
    return data["match"] as Match;
}

export async function deleteMatch(idMatch: number): Promise<any> {
    const idMatchString = idMatch.toString()
    const response = await fetch(baseUrl + `/matchs/${idMatchString}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la suppression du match...")
    }

    const data = await response.json();
    return data;
}

export interface ByMatch{
    teamDomicile: string,
    teamExterieur: string
}

export interface CreatedMatch{
    teamDomicile: string,
    teamExterieur: string,
    dateHeureDebut: string,
    dateHeureFin: string,
    statut: string
}



export interface Match {
    dateHeureDebut: string,
    dateHeureFin: string,
    matchID: number,
    statut: string,
    teamDomicileID: number,
    reamExterieurID: number
}

