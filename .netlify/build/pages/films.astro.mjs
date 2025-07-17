import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, e as renderScript, a as renderTemplate } from '../chunks/astro/server_DF90g_b3.mjs';
import 'kleur/colors';
/* empty css                                 */
import { c as createSvgComponent, $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_lbdTD_jX.mjs';
import { m as myImage } from '../chunks/hero_films_CC_8dM45.mjs';
import { $ as $$ImagePB } from '../chunks/ImagePB_Boz4s9ar.mjs';
import { g as getFilms } from '../chunks/backend_DBCoQnXg.mjs';
export { renderers } from '../renderers.mjs';

const IconLove = createSvgComponent({"meta":{"src":"/_astro/icon_love.1EUqqUw8.svg","width":24,"height":24,"format":"svg"},"attributes":{"mode":"inline","":"","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"#000929","stroke-width":"2"},"children":"\r\n  <path =\"\" d=\"M4.31804 5.31804C3.90017 5.7359 3.5687 6.23198 3.34255 6.77795C3.1164 7.32392 3 7.90909 3 8.50004C3 9.09099 3.1164 9.67616 3.34255 10.2221C3.5687 10.7681 3.90017 11.2642 4.31804 11.682L12 19.364L19.682 11.682C20.526 10.8381 21.0001 9.69352 21.0001 8.50004C21.0001 7.30656 20.526 6.16196 19.682 5.31804C18.8381 4.47412 17.6935 4.00001 16.5 4.00001C15.3066 4.00001 14.162 4.47412 13.318 5.31804L12 6.63604L10.682 5.31804C10.2642 4.90017 9.7681 4.5687 9.22213 4.34255C8.67616 4.1164 8.09099 4 7.50004 4C6.90909 4 6.32392 4.1164 5.77795 4.34255C5.23198 4.5687 4.7359 4.90017 4.31804 5.31804V5.31804Z\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\r\n"});

const $$Astro$1 = createAstro();
const $$CardFilms = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardFilms;
  const { ...film } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col gap-4 border-2 border-red-700 rounded-xl shadow-md max-w-xs text-center overflow-hidden transition-transform duration-300 hover:scale-105"> <a${addAttribute(`/films/${film.id}`, "href")} class="w-full relative"> <div class="w-full rounded-t-xl overflow-hidden"> ${renderComponent($$result, "ImagePB", $$ImagePB, { "record": film, "field": "affiche_film", "alt": film.affiche_film, "classPicture": "w-full h-full rounded-xl", "classImg": "w-full h-full object-cover" })} <div class="absolute top-3 right-3"> <button class="favorite-button border border-indigo-200 rounded-full p-2 bg-white shadow-md"${addAttribute(film.id, "data-id")}${addAttribute(film.favoris_film, "data-favorite")}> ${renderComponent($$result, "IconLove", IconLove, { "class": film.favoris_film ? "stroke-red-700" : "stroke-gray-400" })} </button> </div> <div class="flex flex-col gap-2 p-4"> <h2 class="text-xl font-bold">${film.titre_film}</h2> <p class="text-gray-600"> ${new Date(film.annee_sortie).getFullYear()} - ${film.pays} </p> <p class="text-sm text-gray-700"> <span class="font-medium">Durée :</span> ${film.duree_film} minutes
</p> <p class="text-sm text-gray-700"> <span class="font-medium">Réalisateur :</span> ${film.expand?.realisateur_film ? `${film.expand.realisateur_film.prenom_invite || ""} ${film.expand.realisateur_film.nom_invite || ""}` : "Non sp\xE9cifi\xE9"} </p> <p class="text-sm text-gray-600"> ${new Date(film.date_projection).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  })} </p> <p class="text-lg font-bold text-red-700">${film.salle_film}</p> </div> </div> </a> </article> ${renderScript($$result, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Card_films.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Card_films.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const invite = await getFilms();
  const onlyFavorites = Astro2.url.searchParams.get("favorites") === "true";
  const filteredFilms = onlyFavorites ? invite.filter((film) => film.favoris_film) : invite;
  const title = "Les films";
  const heroAlt = "Image Hero de la page invit\xE9";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "heroImage": myImage, "heroAlt": heroAlt }, { "chapo": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid"> <p class="font-bold mt-3">
Découvrez une sélection inspirante de films dédiés à l'univers du trail
      running, mêlant dépassement de soi, aventure et paysages à couper le
      souffle.
</p> </div>`, "content": ($$result2) => renderTemplate`<div class="grid justify-center"> <div class="flex gap-4 mb-4 text-center"> <a href="?favorites=true"${addAttribute(`p-3 gap-2 text-black border-1 border-red-500 ${onlyFavorites ? "bg-red-100" : "bg-white"} font-normal rounded-2xl`, "class")}>Voir les favoris</a> <a href="?"${addAttribute(`p-3 gap-2 text-black border-1 border-red-500 ${!onlyFavorites ? "bg-red-100" : "bg-white"} font-normal rounded-2xl`, "class")}>Voir tous les films</a> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${filteredFilms.map((film) => renderTemplate`${renderComponent($$result2, "Card_films", $$CardFilms, { ...film })}`)} </div> </div>` })}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/films/index.astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/films/index.astro";
const $$url = "/films";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
