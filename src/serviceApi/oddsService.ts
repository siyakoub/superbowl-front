const baseUrl: string = "http://127.0.0.1:5000/api/odd"

export async function getAllOdds(): Promise<Odds[]> {
    const response = await fetch(baseUrl + '/odds', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération des côtes...")
    }
    const data = await response.json();
    return data["cotes"] as Odds[];
}

export async function getOddsByID(odds_id: number): Promise<Odds> {
    let odd_id_string = odds_id.toString()
    const response = await fetch(baseUrl + `/odds/${odd_id_string}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération de la côte...")
    }
    const data = await response.json();
    return data["cotes"] as Odds;
}

export async function createOdds(oddsRegisttration: OddsRegistration): Promise<Odds> {
    const response = await fetch(baseUrl + '/odds', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(oddsRegisttration)
    });
    if (response.status !== 201) {
        throw new Error("Une erreur est survenue lors de la création de la côte...")
    }
    const data = await response.json();
    return data["cotes"] as Odds;
}

export async function updateOdds(idOdds: number,updatedOdd: UpdatedOdd) : Promise<Odds> {
    let idOddsString = idOdds.toString()
    const response = await fetch(baseUrl + `/odds/${idOddsString}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedOdd)
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la mise à jour de la côtes...")
    }
    const data = await response.json();
    return data["cote"] as Odds;
}

export async function deleteOdds(idOdds:number): Promise<any> {
    let idOddsString = idOdds.toString()
    const response = await fetch(baseUrl + `/odds/${idOddsString}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la supression de la côte...")
    }
    return await response.json();
}


export interface UpdatedOdd{
    coteVictoire: number
}

export interface Odds {
    coteID: number,
    coteVictoire: number,
    teamID: number
}

export interface OddsRegistration{
    coteVictoire: number,
    idTeam : number
}
