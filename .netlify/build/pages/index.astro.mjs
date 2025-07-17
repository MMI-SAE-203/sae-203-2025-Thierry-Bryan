import { c as createComponent, b as createAstro, m as maybeRenderHead, r as renderComponent, a as renderTemplate, d as addAttribute } from '../chunks/astro/server_DF90g_b3.mjs';
import 'kleur/colors';
/* empty css                                 */
import { e as $$Button, $ as $$LayoutWithHero, m as myImage } from '../chunks/LayoutWithHero_lbdTD_jX.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardAccueil = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardAccueil;
  const { subtitle, description, buttonUrl, buttonText } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-4 mb-10"> <h3>${subtitle}</h3> <p>${description}</p> <div class="flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "variant": "default", "url": buttonUrl, "text": buttonText })} </div> </div>`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Card_accueil.astro", void 0);

const imgPartenaire1 = new Proxy({"src":"/_astro/accueil_arte.Dj1bCZfv.webp","width":360,"height":206,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/partenaire/accueil_arte.webp";
							}
							
							return target[name];
						}
					});

const imgPartenaire2 = new Proxy({"src":"/_astro/accueil_canon.DIcrpyfU.webp","width":360,"height":237,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/partenaire/accueil_canon.webp";
							}
							
							return target[name];
						}
					});

const imgPartenaire3 = new Proxy({"src":"/_astro/accueil_credit-agricole.m_luNA9a.webp","width":360,"height":203,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/partenaire/accueil_credit-agricole.webp";
							}
							
							return target[name];
						}
					});

const imgPartenaire4 = new Proxy({"src":"/_astro/accueil_france3.CBhR_3DQ.webp","width":360,"height":70,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/partenaire/accueil_france3.webp";
							}
							
							return target[name];
						}
					});

const imgPartenaire5 = new Proxy({"src":"/_astro/accueil_rcf-radio.Dj3YrAM4.webp","width":360,"height":181,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/partenaire/accueil_rcf-radio.webp";
							}
							
							return target[name];
						}
					});

const imgPartenaire6 = new Proxy({"src":"/_astro/accueil_salomon.CZ3TlzBo.webp","width":360,"height":227,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/partenaire/accueil_salomon.webp";
							}
							
							return target[name];
						}
					});

const imgPartenaire7 = new Proxy({"src":"/_astro/accueil_wwf.DFMEHWTQ.webp","width":360,"height":203,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/partenaire/accueil_wwf.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\xC7a va Trail'er";
  const heroAlt = "Description de l'image hero";
  const partenaires = [
    { image: imgPartenaire1, nom: "Arte" },
    { image: imgPartenaire2, nom: "Canon" },
    { image: imgPartenaire3, nom: "Cr\xE9dit Agricole" },
    { image: imgPartenaire4, nom: "France 3" },
    { image: imgPartenaire5, nom: "RCF Radio" },
    { image: imgPartenaire6, nom: "Salomon" },
    { image: imgPartenaire7, nom: "WWF" }
  ];
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "heroImage": myImage, "heroAlt": heroAlt }, { "chapo": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid"> <h2 class="mb-8">
La prochaine édition de "Ça va trailer" ce déroulera du 15 au 21 avril
      2025
</h2> <div class="flex justify-center mt-1.25 mb-8"> ${renderComponent($$result2, "Button", $$Button, { "variant": "default", "url": "/signup", "text": "R\xC9SERVER VOTRE PLACE" })} </div> <div> <p class="font-bold mt-3">
Le festival "Ça va trai'ler", situé à Belfort du 15 au 21 avril 2025,
        célèbre le trail running à travers des projections de films inspirants
        et des rencontres avec les cinéastes et les athlètes. Ce rendez-vous
        unique offre une immersion au cœur de ce sport exigeant, mettant en
        avant les défis, la nature sauvage et la détermination des athlètes à
        travers des récits captivants.
</p> </div> </div>`, "content": ($$result2) => renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"> ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "subtitle": "Programme", "description": `La programmation de "\xC7a va trai'ler" offre une s\xE9lection de films immersifs, courts m\xE9trages et trailers r\xE9alis\xE9s par de nouveaux artistes en collaboration avec des athl\xE8tes, mettant en lumi\xE8re l'\xE9nergie et la passion du trail running.`, "buttonUrl": "/signup", "buttonText": "PROGRAMME" })} ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "subtitle": "Invit\xE9", "description": `Des invit\xE9s d'exception au rendez-vous ! Rencontrez des artistes, r\xE9alisateurs et intervenants passionnants qui feront de ce festival une exp\xE9rience unique et inoubliable.`, "buttonUrl": "./invite", "buttonText": "INVIT\xC9S" })} ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "subtitle": "Billeterie", "description": `R\xE9servez vos billets pour "\xC7a va trail'er" et vivez une exp\xE9rience unique autour du trail running \xE0 Belfort, du 15 au 21 avril 2025 !`, "buttonUrl": "/signup", "buttonText": "BILLETERIE" })} ${renderComponent($$result2, "Card_accueil", $$CardAccueil, { "subtitle": "Infos pratiques", "description": `Pr\xE9parez votre venue au festival ! D\xE9couvrez toutes les informations essentielles pour organiser votre exp\xE9rience : acc\xE8s, h\xE9bergements, lieux et billetterie gratuite.`, "buttonUrl": "/signup", "buttonText": "INFOS PRATIQUES" })} </div><div class="mt-16"> <h2 class="text-3xl mb-8">Nos partenaires</h2> <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8"> ${partenaires.map((partenaire) => renderTemplate`<div class="flex items-center justify-center p-4"> <img${addAttribute(partenaire.image.src, "src")}${addAttribute(`Logo ${partenaire.nom}`, "alt")} class="max-h-20 object-contain"> </div>`)} </div> </div>` })}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/index.astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
