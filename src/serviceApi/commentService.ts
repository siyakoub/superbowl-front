const baseUrl = "http://127.0.0.1:5000/api/comment";

export async function getAllComment(): Promise<Comment[]>{
    const response = await fetch(baseUrl + '/comments', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 404) {
        throw new Error("Aucun commentaire n'as été trouvé...");
    }
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la récupération des commentaires...");
    }
    const data = await response.json();
    return data["comments"] as Comment[]
}

export async function getCommentByID(idComment: number) : Promise<Comment> {
    let idCommentString = idComment.toString()
    const response = await fetch(baseUrl + `/comments/${idCommentString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 404) {
        throw new Error("Aucun Commentaire n'a été trouvé...")
    }
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération du commentaire...")
    }
    const data = await response.json();
    return data["commentaire"] as Comment;
}

export async function getByMatchID(idMatch: number): Promise<Comment[]> {
    let idMatchString = idMatch.toString()
    const response = await fetch(baseUrl + `/comments/bymatch/${idMatchString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.status === 404) {
        throw new Error("Aucun commentaire disponible...")
    }
    if (!response.ok) {
        throw new Error("Une erreur est survenue lors de la récupération des commentaires...")
    }
    const data = await response.json();
    return data["commentaires"] as Comment[];
}

export async function createComment(registerComment: RegisterComment): Promise<Comment> {
    const response = await fetch(baseUrl + '/comments', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerComment)
    });
    if (response.status === 404) {
        throw new Error("Le commentaire n'as pas été ajouté...")
    }
    if (!response.ok){
        throw new Error("Une erreur est survenur lors de la création du commentaire...")
    }
    const data = await response.json();
    return data["commentaire"] as Comment;
}

export async function updateComment(idComment: number, updatedComment: UpdatedComment): Promise<Comment>{
    let idCommentString = idComment.toString()
    const response = await fetch(baseUrl + `/comments/${idCommentString}`, {
        method: 'PUT',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(updatedComment)
    });
    if (response.status === 404){
        throw new Error("Le commentaire n'a pas été mis à jour...");
    }
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la mise à jour du commentaire...");
    }
    const data = await response.json();
    return data["commentaire"] as Comment;
}

export async function deleteComment(idComment: number): Promise<any> {
    let idCommentString = idComment.toString()
    const response = await fetch(baseUrl + `/comments/${idCommentString}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok){
        throw new Error("Une erreur est survenue lors de la suppression du commentaire...");
    }
    const data = await response.json();
    return data;
}

export interface UpdatedComment{
    matchID: number,
    commentateur: string,
    commentaire: string
}

export interface Comment{
    commentID:number,
    commentaire:string,
    commentateur:string,
    dateHeureCommentaire:string,
    matchID:number
}

export interface RegisterComment{
    teamDomicile: string,
    teamExterieur: string,
    commentateur: string,
    commentaire: string
}
