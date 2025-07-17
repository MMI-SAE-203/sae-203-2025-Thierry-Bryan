import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_DF90g_b3.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$LayoutWithHero } from '../../chunks/LayoutWithHero_lbdTD_jX.mjs';
import { m as myImage } from '../../chunks/hero_films_CC_8dM45.mjs';
import { $ as $$ImagePB } from '../../chunks/ImagePB_Boz4s9ar.mjs';
import { a as getFilmByID } from '../../chunks/backend_DBCoQnXg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const film = await getFilmByID(id);
  if (!film) {
    return Astro2.redirect("/films");
  }
  const heroAlt = "Image Hero de la page invit\xE9";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": film.titre_film, "heroImage": myImage, "heroAlt": heroAlt }, { "chapo": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid"> <p> ${film.chapo_film} </p> </div>`, "content": ($$result2) => renderTemplate`<button onclick="history.back()" class="mb-6 px-4 py-2 bg-primary text-red-700 font-bold rounded-md hover:bg-primary-dark transition-colors">
&larr; Retour
</button><section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-start"> <div class="w-full rounded-xl overflow-hidden border-2 border-red-700"> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": film, "field": "affiche_film", "alt": film.titre_film, "classPicture": "w-full h-full rounded-xl", "classImg": "w-full h-full object-cover" })} </div> <div class="flex flex-col gap-4"> <div class="text-center lg:text-left"> ${film.date_projection && renderTemplate`<p class="font-bold"> ${new Date(film.date_projection).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit"
  }).replace(" \xE0 ", " - ")} </p>`} <p class="font-bold text-lg">${film.salle_film}</p> </div> <p class="text-sm text-gray-700">
Réalisation : ${film.expand?.realisateur_film.prenom_invite} ${film.expand?.realisateur_film.nom_invite} </p> <h1 class="text-2xl font-bold uppercase">${film.titre_film}</h1> <p class="text-gray-600 italic text-sm"> ${film.pays} - ${film.duree_film} minutes
</p> <p class="text-sm text-gray-800">${film.description_film}</p> </div> </section><div class="flex flex-col justify-center mt-10 gap-10"> <video class="w-full" width="640" height="360" controls> <source src="../../assets/videos/teaser_vers-les-sommets.mp4" type="video/mp4">
Votre navigateur ne supporte pas la balise vidéo.
</video> <div> <a${addAttribute(`/invite/${film.expand?.realisateur_film.id}`, "href")}> <div class="mt-4 p-4 border-l-4 border-red-700 bg-gray-100 rounded-md"> <h3 class="text-lg font-semibold mb-4">
À propos du réalisateur : ${film.expand?.realisateur_film.prenom_invite} ${film.expand?.realisateur_film.nom_invite} </h3> <p class="text-sm text-gray-800"> ${film.expand?.realisateur_film.bio_invite} </p> </div> </a> </div> </div>` })}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/films/[id].astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/films/[id].astro";
const $$url = "/films/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
