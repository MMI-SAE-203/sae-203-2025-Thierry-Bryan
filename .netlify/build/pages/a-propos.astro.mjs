import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DF90g_b3.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_lbdTD_jX.mjs';
import { g as getFilms } from '../chunks/backend_DBCoQnXg.mjs';
import { $ as $$Paragraphe } from '../chunks/Paragraphe_Cq8DB6ge.mjs';
export { renderers } from '../renderers.mjs';

const myImage = new Proxy({"src":"/_astro/hero_a-propos.BTqEArsq.webp","width":1782,"height":1173,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/hero_page/hero_a-propos.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await getFilms();
  const title = "\xC0 propos";
  const heroAlt = "Image Hero de la page a propos";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "heroImage": myImage, "heroAlt": heroAlt }, { "chapo": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid"> <p class="font-bold mt-3">
Pour toute question, suggestion ou demande d'information concernant le
      festival "Ça va trai'ler", n'hésitez pas à nous écrire. Nous serons ravis
      de vous aider !
</p> </div>`, "content": ($$result2) => renderTemplate`<div class="grid justify-center"> ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "subtitle": "Notre Histoire", "description": `Le Festival de Cin\xE9ma de Trail de Bavilliers est n\xE9 en [ann\xE9e de cr\xE9ation] d\u2019une passion commune pour le sport et l\u2019image. Ce festival unique en son genre c\xE9l\xE8bre la beaut\xE9 du trail running \xE0 travers des \u0153uvres cin\xE9matographiques inspirantes.
        Objectifs principaux :
        Mettre en lumi\xE8re des films et documentaires explorant l\u2019univers du trail, des grands d\xE9fis sportifs aux aventures humaines.
        Valoriser les paysages naturels et les histoires de d\xE9passement de soi.
        Cr\xE9er un espace de rencontre entre cin\xE9philes, sportifs et r\xE9alisateurs.` })} ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "subtitle": "Notre \xE9quipe", "description": `Notre \xE9quipe est compos\xE9e de passionn\xE9s de cin\xE9ma, de trail running et de nouvelles technologies, qui partagent la m\xEAme envie de rendre cet \xE9v\xE9nement accessible, convivial et unique.
        Organisateurs : Une \xE9quipe compos\xE9e de sportifs, cin\xE9astes et amoureux de la nature, unis par leur volont\xE9 de promouvoir le cin\xE9ma li\xE9 au trail running.
        \xC9quipe technique : Professionnels du cin\xE9ma et du sport, assurant des projections de qualit\xE9 et une organisation sans faille.
        B\xE9n\xE9voles : Des membres essentiels qui participent \xE0 l\u2019accueil, \xE0 la logistique et \xE0 l\u2019accompagnement des invit\xE9s.
        Partenaires : Des marques et institutions locales et sp\xE9cialis\xE9es dans le trail, le sport et le cin\xE9ma.

        Nous avons h\xE2te de vous accueillir pour cette premi\xE8re \xE9dition de "\xC7a va trail\u2019er" \xE0 Belfort !` })} ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "subtitle": "Chartre : L\u2019esprit de l\u2019\xE9dition 2025", "description": `Cette ann\xE9e, le festival explore la th\xE9matique "L\u2019homme face \xE0 la montagne".
        Nos valeurs :
        Inspiration : Mettre en avant des histoires captivantes qui c\xE9l\xE8brent le d\xE9passement de soi et la beaut\xE9 de la nature.
        Respect de l\u2019environnement : Favoriser un \xE9v\xE9nement durable et \xE9coresponsable, en harmonie avec les valeurs du trail.
        Accessibilit\xE9 : Projections gratuites  pour que chacun puisse d\xE9couvrir ces r\xE9cits inspirants.
        Communaut\xE9 : Encourager les \xE9changes entre cin\xE9astes, traileurs et spectateurs autour de leur passion commune.
        Innovation : \xC7a va trai'ler" explore l'avenir du cin\xE9ma en int\xE9grant technologies innovantes comme la r\xE9alit\xE9 virtuelle et les cr\xE9ations par intelligence artificielle.` })} </div>` })}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/a-propos/index.astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/a-propos/index.astro";
const $$url = "/a-propos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
