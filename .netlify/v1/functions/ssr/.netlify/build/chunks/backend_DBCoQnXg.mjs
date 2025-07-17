import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase-ca-va-trailer.fly.dev/');

//retourne la liste de tous les films triés par date de projection
async function getFilms(){
    const Records = await pb.collection('film').getFullList({
        sort: 'date_projection',
        expand: 'realisateur_film'
    });
    return Records;
}

//retourne les infos d'un programme en donnant son id en paramètre
async function getProgramme(){
    const Records = await pb.collection('programme').getFullList();
    return Records;
}

async function getInvite(collection = "invite") {
  try {
    let records = await pb.collection(collection).getFullList({sort: 'nom_invite', filter: 'role_invite = "Animateur et Membre du Jury"'});
    return records;

  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return [];
  }
}

async function getInviteByID(id) {
  try {
    let records = await pb.collection("invite").getOne(id);
    return records;

  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
    return [];
  }
}

async function getFilmByID(id) {
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

export { getFilmByID as a, getInvite as b, getInviteByID as c, getProgramme as d, getFilms as g, pb as p };
