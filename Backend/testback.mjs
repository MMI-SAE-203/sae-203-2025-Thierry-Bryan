import {updateInvite, addFilm, addActivity, addInvite, /*getActivitybyAnimatorID*/ oneFilmMaker, oneActivity, oneFilm, getFilms, getActivities, getFilmMaker} from "./backend.mjs";

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

/* Q8 Ajout Invite
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

/* Q8 Ajout Film
try {
    const newFilm = {
        "titre_film": "Terminator",
    };
    await addFilm(newFilm);
} catch (e) {
    console.error(e);
}
*/

/* Q8 Ajout Activite
try {
    const newActivity = {
        "type_activite": "Course",
    };
    await addActivity(newActivity);
} catch (e) {
    console.error(e);
}
*/

/* Q9 Update Invite
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

/* Q9 Update Invite
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