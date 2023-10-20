import {User} from "./userService";

const baseUrl: string = "http://127.0.0.1:5000/api/bet"

export async function getAllBet(): Promise<Bet[]> {
    const response = await fetch(baseUrl + '/bets', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération des paris sportifs...")
    }
    const data = await response.json();
    return data["Paris"] as Bet[]
}

export async function getBetByID(id_bet: number): Promise<Bet>{
    const id_bet_string = id_bet.toString()
    const response = await fetch(baseUrl + `/bets/${id_bet_string}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération du pari sportif...")
    }
    const data = await response.json();
    return data["Pari"] as Bet;
}

export async function getBetByUser(id_user: number): Promise<{ paris: Bet[]; utilisateur: User }> {
    const id_user_string = id_user.toString();
    const response = await fetch(baseUrl + `/bets/${id_user_string}/byuser`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération des paris sportifs de l'utilisateur...");
    }
    const data = await response.json();
    return {
        paris: data["Paris"] as Bet[],
        utilisateur: data["Utilisateur"] as User
    };
}

export interface Bet{
    betID : number,
    matchID : number,
    montantMiser : string,
    montantPotentiel : string
    teamID : number,
    userID : number
}
