const baseUrl = 'http://127.0.0.1:5000/event'

export async function getAllEvent(): Promise<Event[]>{
    const response = await fetch(baseUrl + '/events', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération des évènements...")
    }
    const data = await response.json();
    return data["Evenements"] as Event[];
}

export async function getEventByID(idEvent: number): Promise<Event> {
    let idEventString = idEvent.toString()
    const response = await fetch(baseUrl + `/events/${idEventString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 404){
        throw new Error("Aucun Evenements n'a été trouvé...")
    }
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération de l'evenments...")
    }
    const data = await response.json();
    return data["Evenement"] as Event;
}

export async function getEventByMatch(idMatch: number): Promise<Event[]> {
    let idMatchString = idMatch.toString()
    const response = await fetch(baseUrl + `/events/${idMatchString}/bymatchs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 404) {
        throw new Error("Aucun évènements n'est prévu pour ce match...")
    }
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération des évènements du match...")
    }
    const data = await response.json();
    return data["Evenements"] as Event[];
}

export async function createEvent(registerEvent: RegisterEvent): Promise<Event> {
    const response = await fetch(baseUrl + '/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerEvent)
    });
    if (response.status !== 201) {
        throw new Error("Une erreur est survenue lors de la création de l'évènement...")
    }
    const data = await response.json();
    return data["Evenement"] as Event;
}

export async function updateEvent(updatedEvent: UpdatedEvent): Promise<Event>{
    const response = await fetch(baseUrl + '/events', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedEvent)
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la mise à jour de l'évènement...")
    }
    const data = await response.json();
    return data["Evenement"] as Event;
}

export async function deleteEvent(idEvent: number): Promise<any> {
    let idEventString : string = idEvent.toString();
    const response = await fetch(baseUrl + `/events/${idEventString}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la suppresion de l'évènement...")
    }
    return await response.json();
}

export interface Event {
    dateHeure: string,
    description: string,
    eventID: number,
    matchID: number,
    type: string
}

export interface RegisterEvent{
    description: string,
    typeEvenement: string,
    teamDomicile: string,
    teamExterieur: string
}

export interface UpdatedEvent{
    teamDomicile: string,
    teamExterieur:string,
    description: string,
    typeEvent: string
}
