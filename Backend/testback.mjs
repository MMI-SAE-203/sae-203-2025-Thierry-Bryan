import {getFilmByID, getBioRealisatorByMovie, getInvite, allActiviteByAnimateurName, updateFilm, updateActivity, updateInvite, addFilm, addActivity, addInvite, /*getActivitybyAnimatorID*/ oneFilmMaker, oneActivity, oneFilm, getFilms, getActivities, getFilmMaker} from "./backend.mjs";

/* Q1
try {
    const films = await getFilms();
    console.log(films);
} catch (e) {
    console.error(e);
}
*/


/* Q2
try {
    const activities = await getActivities();
    console.log(activities);
} catch (e) {
    console.error(e);
}
*/

/* Q3 
try {
    const filmMaker = await getFilmMaker();
    console.log(filmMaker);
}
catch (e) {
    console.error(e);
}
*/

/* Q4 
try {
    const film = await oneFilm("54818av68rx839t");
    console.log(film);
} catch (e) {
    console.error(e);
}
*/

/* Q5 
try {
    const activity = await oneActivity("e77bs6105n4pxs0");
    console.log(activity);
}
catch (e) {
    console.error(e);
}
*/

/* Q6 
try {
    const filmMaker = await oneFilmMaker("6351m7s32cd2098");
    console.log(filmMaker);
} catch (e) {
    console.error(e);
}
*/

/* Q7 
try {
    const activities = await getActivitybyAnimatorID("bf0v6qevdnw59yn");
    console.log(activities);
}
catch (e) {
    console.error(e);
}
*/

/* Q8
try {
  const allRecord = await allActiviteByAnimateurName("Forsberg");
  console.log(allRecord);
} catch (e) {
  console.error(e);
}
*/

/* Q9.1 Ajout Invite
try {
    const newInvite = {
        "nom_invite": "Thierry",
        "prenom_invite": "Bryan",
        "role_invite": "Réalisateur",
    };
    await addInvite(newInvite);
} catch (e) {
    console.error(e);
}
*/

/* Q9.2 Ajout Film
try {
    const newFilm = {
        "titre_film": "Terminator",
    };
    await addFilm(newFilm);
} catch (e) {
    console.error(e);
}
*/

/* Q9.3 Ajout Activite
try {
    const newActivity = {
        "type_activite": "Course",
    };
    await addActivity(newActivity);
} catch (e) {
    console.error(e);
}
*/

/* Q9.4 Update Invite
try {
    const data = {
        "nom_invite": "Thierry",
        "prenom_invite": "Bryan",
        "bio_invite": "Je suis un réalisateur",
    };
    await updateInvite('xe3q514eie834px', data);
}
catch (e) {
    console.error(e);
}
*/

/* Q9.5 Update Film
try {
    const data = {
        "titre_film": "Thierry",
    };
    await updateFilm('xe3q514eie834px', data);
}
catch (e) {
    console.error(e);
}
*/

/* Q9.6 Update Activity
try {
    const data = {
        "type_activite": "Course",
    };
    await updateActivity('xe3q514eie834px', data);
}
catch (e) {
    console.error(e);
}
*/

/*
try {
  const records = await getInvite()
  console.log(records)
} catch (e) {
  console.error(e)
}
*/


try {
  const records = await getFilmByID("z3915p16ov65v1i")
  console.log(records)
} catch (e) {
  console.error(e)
}