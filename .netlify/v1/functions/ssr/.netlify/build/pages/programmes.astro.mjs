import { c as createComponent, r as renderComponent, a as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DF90g_b3.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_lbdTD_jX.mjs';
import { m as myImage } from '../chunks/hero_invites_7kSIY1RK.mjs';
import { $ as $$ImagePB } from '../chunks/ImagePB_Boz4s9ar.mjs';
import { d as getProgramme } from '../chunks/backend_DBCoQnXg.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const programmes = await getProgramme();
  const title = "Programme";
  const heroAlt = "Image Hero de la page invit\xE9";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "heroImage": myImage, "heroAlt": heroAlt }, { "chapo": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid"> <p class="font-bold mt-3">
Découvrez la programmation complète de "Ça va trai'ler" et plongez dans
      une semaine riche en films, rencontres et ateliers autour du trail
      running. Chaque jour, de nouvelles projections et événements vous
      attendent pour une immersion totale dans l'univers du sport et de la
      nature.
</p> </div>`, "content": ($$result2) => renderTemplate`<div class=""> <ul class="space-y-6"> ${programmes.map((programme, index) => renderTemplate`<li${addAttribute(`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center text-xs md:text-base space-x-2 md:items-center md:space-x-4 space-y-4 md:space-y-0`, "class")}> <div class="relative w-1/3 md:w-1/3"> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": programme, "field": "programme_img", "alt": "Programme", "classPicture": "rounded-lg", "classImg": "w-full object-cover", "thumb": "1024x1024" })} </div> <div class="flex-1"> <h3 class="text-xl font-bold mb-2"> ${new Date(programme.programme_date).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).replace(/^\w/, (c) => c.toUpperCase())} </h3> <p class="text-gray-700">${programme.programme_text}</p> </div> </li>`)} </ul> </div>` })}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/programmes/index.astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/programmes/index.astro";
const $$url = "/programmes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
