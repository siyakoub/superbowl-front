const baseUrl = 'http://127.0.0.1:5000/api/historiquemise'

export async function getAllHistoriquesMises(): Promise<HistoriqueMise[]> {
    const response = await fetch(baseUrl + '/historiquesmises', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupérations des historiques de mises...")
    }
    const data = await response.json();
    return data["historiquesMises"] as HistoriqueMise[];
}

export async function getHistoriqueMiseByID(idHisto: number) : Promise<HistoriqueMise> {
    let idHistoString = idHisto.toString()
    const response = await fetch(baseUrl + `/historiquesMises/${idHistoString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération de l'historique de la mise...")
    }
    const data = await response.json();
    return data["historiqueMise"] as HistoriqueMise;
}

export async function getHistoriqueMiseByUserID(userID: number) : Promise<HistoriqueMise[]> {
    let idUserString = userID.toString();
    const response = await fetch(baseUrl + `/historiquesmises/${idUserString}/byuser`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération des historiques de mises de l'utilisateur...")
    }
    const data = await response.json();
    return data["historiqueMises"] as HistoriqueMise[];
}

export async function getHistoriqueByMatchId(matchID: number): Promise<HistoriqueMise[]> {
    let idMatchString = matchID.toString()
    const response = await fetch(baseUrl + `/historiquesmises/${idMatchString}/bymatch`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 404) {
        throw new Error("Aucune historique de mise n'a été trouvé pour cette équipe...")
    }
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération des historiques de mises du match...")
    }
    const data = await response.json();
    return data["historiqueMises"] as HistoriqueMise[];
}

export async function createHistorique(registerHistoriqueMise: RegisterHistoriqueMise): Promise<HistoriqueMise>{
    const response = await fetch(baseUrl + '/historiquesmises', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerHistoriqueMise)
    });
    if (response.status !== 201) {
        throw new Error("Une erreur est survenue lors de la création de l'historique de mise...")
    }
    const data = await response.json();
    return data["historiqueMise"] as HistoriqueMise;
}

export async function updateHistorique(updatedHistorique: UpdatedHistoriqueMise, idHisto: number): Promise<HistoriqueMise> {
    let idHistoString = idHisto.toString();
    const response = await fetch(baseUrl + `/historiquesmises/${idHistoString}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedHistorique)
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la mise à jour de l'historique de mise...")
    }
    const data = await response.json();
    return data["historiqueMise"] as HistoriqueMise;
}

export async function deleteHistorique(idHisto: number) : Promise<HistoriqueMise> {
    let idHistoString = idHisto.toString();
    const response = await fetch(baseUrl + `/historiquesmises/${idHistoString}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la suppression de l'historique de mise...")
    }
    return await response.json();
}

export interface HistoriqueMise{
    historiqueMiseID: number,
    matchID: number,
    montantMiser: string,
    resultat: string,
    userID: number
}

export interface RegisterHistoriqueMise {
    userEmail: string,
    teamDomicile: string,
    teamExterieur: string,
    montantMiser: string,
    resultat: string
}

export interface UpdatedHistoriqueMise {
    teamDomicile: string,
    teamExterieur: string,
    emailUser: string,
    montantMiser: string,
    resultat: string
}
