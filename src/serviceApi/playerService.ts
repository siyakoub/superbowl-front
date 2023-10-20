import {Team} from "./teamService";

const baseUrl: string = "http://127.0.0.1:5000/api/player"

export async function getPlayers(): Promise<Player[]>{
    const response = await fetch(baseUrl + '/players', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération des joueurs...")
    }
    const data = await response.json();
    return data as Player[];
}

export async function getPlayerByID(id_player: number): Promise<{ player: Player; team: Team}> {
    let id_player_string = id_player.toString()
    const response = await fetch(baseUrl + `/players/${id_player_string}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération du joueur...")
    }
    const data = await response.json();
    return {
        player: data["player"] as Player,
        team: data["team"] as Team
    };
}

export async function createPlayer(registerPlayer: RegisterPlayer): Promise<{ player: Player; team: Team }>{
    const response = await fetch(baseUrl + '/players', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerPlayer)
    });
    if (response.status !== 201) {
        throw new Error("Une erreur est survenue lors de la création du nouveau joueur...")
    }
    const data = await response.json();
    return {
        player: data["player"] as Player,
        team: data["team"] as Team
    }
}

export async function searchPlayer(searchPlayer: SearchPlayer): Promise<{ player: Player; team: Team }>{
    const response = await fetch(baseUrl + '/players/search', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchPlayer)
    });
    if (response.status === 404){
        throw new Error("Aucun joueur n'a été trouvé...")
    }
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération du joueur...")
    }
    const data = await response.json();
    return {
        player: data["player"] as Player,
        team: data["team"] as Team
    }

}

export async function updatePlayer(updatedPlayer: UpdatedPlayer): Promise<{ player: Player; team: Team }> {
    const response = await fetch(baseUrl + '/players', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedPlayer)
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la mise à jour du joueur...")
    }
    const data = await response.json();
    return {
        player: data["player"] as Player,
        team: data["team"] as Team
    }
}

export async function deletePlayer(deletedPlayer: SearchPlayer): Promise<any> {
    const response = await fetch(baseUrl + '/players', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(deletedPlayer)
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la suppression du joueur...")
    }
    return await response.json();
}


export interface Player{
    firstName: string,
    name: string,
    number : number,
    playerID : number,
    team_ID: number
}

export interface UpdatedPlayer{
    name: string,
    firstName: string,
    newName: string,
    newFirstName: string,
    number: number,
    teamName: string
}

export interface RegisterPlayer{
    name : string,
    firstName: string,
    number: number,
    teamName: string
}

export interface SearchPlayer{
    name: string,
    firstName: string
}
