import { record } from 'astro:schema';
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
export { pb };

//retourne la liste de tous les films triés par date de projection
export async function getFilms(){
    const Records = await pb.collection('film').getFullList({sort: 'date_projection'});
    return Records;
}

//retourne la liste des activités triés par date de projection
export async function getActivities(){
    const Records = await pb.collection('activite').getFullList({sort: 'date_act'});
    return Records;
}

//retourne la liste de tous les réalisateurs participant au festival triés par ordre alphabétique
export async function getFilmMaker(){
    const Records = await pb.collection('invite').getFullList({sort: 'nom_invite', filter: 'role_invite = "Réalisateur"'});
    return Records;
}

//retourne les infos d'un film en donnant son id en paramètre
export async function oneFilm(id){
    const Records = await pb.collection('film').getOne(id);
    return Records;
}

//retourne les infos d'une activité en donnant son id en paramètre
export async function oneActivity(id){
    const Records = await pb.collection('activite').getOne(id);
    return Records;
}

//retourne les infos d'un réalisateur en donnant son id en paramètre
export async function oneFilmMaker(id){
    const Records = await pb.collection('invite').getOne(id);
    if (Records.role_invite === "Réalisateur") {
            return Records;
        } else {
            console.warn(`L'invité avec l'ID ${id} n'est pas un réalisateur.`);
            return null;
        }
}

//retourne toutes les activités d’un animateur donné par son id
export async function getActivityAnimatorID(animatorId){
    const Records = await pb.collection('activite').getFullList({filter: `animateur = "${animatorId}"`});
    return Records;
}

// retourne toutes les activités d’un animateur donné par son nom
export async function allActiviteByAnimateurName(nom) {
  const Records = await pb.collection("activite").getFullList({filter: `animateur.nom_invite = '${nom}'`, expand: "animateur"});
  return Records;
}


export async function getBioRealisatorByMovie(bio) {
  const Records = await pb.collection("film").getFullList({filter: `invite.bio_invite = '${bio}'`, expand: "invite"});
  return Records;
}

//Ajout d'un nouvel invité, film et activité
    export async function addInvite(newInvite) {
        const Records = await pb.collection('invite').create(newInvite);
        return Records;
    }

    export async function addFilm(newFilm) {
        const Records = await pb.collection('film').create(newFilm);
        return Records;
    }

    export async function addActivity(newActivity) {
        const Records = await pb.collection('activite').create(newActivity);
        return Records;
    }

//Modification d'un invité, film et activité
    export async function updateInvite(data, id) {
        const Records = await pb.collection('invite').update(data, id);
        return Records;
    }

    export async function updateFilm(data, id) {
        const Records = await pb.collection('film').update(data, id);
        return Records;
    }

    export async function updateActivity(data, id) {
        const Records = await pb.collection('activite').update(data, id);
        return Records;
    }

export async function getInvite(collection = "invite") {
  try {
    let records = await pb.collection(collection).getFullList({sort: 'nom_invite', filter: 'role_invite = "Animateur et Membre du Jury"'});
    return records;

  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return [];
  }
}

export async function getInviteByID(id) {
  try {
    let records = await pb.collection("invite").getOne(id);
    return records;

  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return [];
  }
}

export async function getFilmByID(id) {
  try {
    let records = await pb.collection("film").getOne(id, {
      expand: "realisateur_film" 
    });
    return records;
  } catch (error) {
    console.error("Erreur lors de la récupération du film :", error);
    return null;
  }
}
