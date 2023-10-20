

const baseUrl: string = "http://127.0.0.1:5000/api/team"

export async function getAllTeams(): Promise<Team[]> {
    const response = await fetch(baseUrl + '/teams', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération des équipes...")
    }
    const data = await response.json();
    return data as Team[];
}

export async function getTeamByID(idTeam: number): Promise<Team>{
    let idTeamString = idTeam.toString()
    const response = await fetch(baseUrl + `/teams/${idTeamString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération de l'équipe...")
    }
    const data = await response.json();
    return data as Team;
}

export async function getTeamByName(teamName: string): Promise<Team> {
    let teamNameUrl = encodeURI(teamName)
    const response =  await fetch(baseUrl + `/teams/${teamNameUrl}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération de l'équipe")
    }
    if (response.status === 404){
        throw new Error('Aucune équipes n\'a été trouvé...')
    }
    const data = await response.json();
    return data as Team;
}

export async function createTeam(registerTeam: RegisterTeam): Promise<Team>{
    const response = await fetch(baseUrl + '/teams', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerTeam)
    });
    if (response.status !== 201){
        throw new Error("Une erreur est survenue lors de la création de l'équipe...")
    }
    const data = await response.json();
    return data["team"] as Team;
}

export async function updateTeam(teamName: string, updatedTeam: RegisterTeam): Promise<Team> {
    let teamNameUrl = encodeURI(teamName);
    const response = await fetch(baseUrl + `/teams/${teamNameUrl}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'applcation/json'
        },
        body: JSON.stringify(updatedTeam)
    });
    if (response.status !== 201) {
        throw new Error("Une erreur est survenue lors de la mise à jour de l'équipe...")
    }
    const data = await response.json();
    return data["team"] as Team;
}

export async function deleteTeam(teamName: string): Promise<any> {
    let teamNameUrl = encodeURI(teamName);
    const response = await fetch(baseUrl + `/teams/${teamNameUrl}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la suppression de l'équipe...")
    }
    return await response.json();
}


export interface RegisterTeam{
    name: string,
    country: string
}


export interface Team {
    country: string,
    name: string,
    teamID: number
}
