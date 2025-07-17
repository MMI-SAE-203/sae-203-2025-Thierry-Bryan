import { c as createComponent, m as maybeRenderHead, e as renderScript, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DF90g_b3.mjs';
import 'kleur/colors';
/* empty css                                 */
import { c as createSvgComponent, $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_lbdTD_jX.mjs';
import { $ as $$Paragraphe } from '../chunks/Paragraphe_Cq8DB6ge.mjs';
import 'clsx';
/* empty css                                 */
import { b as getInvite } from '../chunks/backend_DBCoQnXg.mjs';
export { renderers } from '../renderers.mjs';

const myImage = new Proxy({"src":"/_astro/hero_infos.BpWHK38R.webp","width":1782,"height":1173,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/hero_page/hero_infos.webp";
							}
							
							return target[name];
						}
					});

const France = new Proxy({"src":"/_astro/infos-pratiques_carte-france.Xy8dW7ry.webp","width":604,"height":564,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/lieux/infos-pratiques_carte-france.webp";
							}
							
							return target[name];
						}
					});

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqItems = [
    {
      question: "Comment s'inscrire au festival ?",
      answer: "R\xE9servez vos billets gratuitement en ligne via notre billetterie. Une fois votre r\xE9servation effectu\xE9e, vous recevrez un billet avec un QR code par e-mail."
    },
    {
      question: "Le festival est-il vraiment gratuit ?",
      answer: "Oui, l'entr\xE9e est 100 % gratuite. Il suffit de r\xE9server votre billet en ligne via notre billetterie."
    },
    {
      question: "Y a-t-il des activit\xE9s pour les enfants ?",
      answer: "Oui, des ateliers et animations sp\xE9cialement con\xE7us pour les enfants seront organis\xE9s."
    },
    {
      question: "Puis-je venir sans billet ?",
      answer: "Oui, mais nous recommandons de vous inscrire \xE0 l'avance pour garantir votre acc\xE8s aux ateliers et projections."
    },
    {
      question: "Les animaux sont-ils autoris\xE9s ?",
      answer: "Seuls les animaux d'assistance sont autoris\xE9s."
    },
    {
      question: "O\xF9 peut-on manger sur place ?",
      answer: "Des stands de restauration rapide et un espace pique-nique seront disponibles sur le site."
    },
    {
      question: "Y a-t-il des offres sp\xE9ciales pour les groupes ?",
      answer: "Oui, un Billet Groupe est disponible pour 3 \xE0 5 personnes, parfait pour les familles ou amis."
    },
    {
      question: "Que faire si je ne peux pas venir apr\xE8s avoir r\xE9serv\xE9 ?",
      answer: "Pas de souci ! Informez-nous via l'e-mail de confirmation pour lib\xE9rer votre place."
    },
    {
      question: "Y a-t-il des parkings \xE0 proximit\xE9 ?",
      answer: "Oui, plusieurs parkings gratuits sont disponibles \xE0 quelques minutes \xE0 pied des lieux principaux du festival."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="faq-container max-w-2xl mx-auto p-6 space-y-4" data-astro-cid-z6gx6xcw> ${faqItems.map((item, index) => renderTemplate`<div class="faq-item border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" data-astro-cid-z6gx6xcw> <div class="faq-question bg-gray-50 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"${addAttribute(index, "data-index")} data-astro-cid-z6gx6xcw> <span class="font-medium text-gray-800" data-astro-cid-z6gx6xcw>${item.question}</span> <span class="faq-icon text-xl text-gray-600 font-medium transition-transform duration-300" data-astro-cid-z6gx6xcw>+</span> </div> <div class="faq-answer bg-white overflow-hidden max-h-0 transition-all duration-300 ease-in-out" data-astro-cid-z6gx6xcw> <p class="p-4 text-gray-600" data-astro-cid-z6gx6xcw>${item.answer}</p> </div> </div>`)} </div> ${renderScript($$result, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Faq.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Faq.astro", void 0);

const Caroussel1 = new Proxy({"src":"/_astro/infos-pratiques_parc-img1.DrtoaZrF.webp","width":518,"height":388,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/lieux/infos-pratiques_parc-img1.webp";
							}
							
							return target[name];
						}
					});

const Caroussel2 = new Proxy({"src":"/_astro/infos-pratiques_parc-img2.LO4Ma8g8.webp","width":518,"height":388,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/lieux/infos-pratiques_parc-img2.webp";
							}
							
							return target[name];
						}
					});

const Caroussel3 = new Proxy({"src":"/_astro/infos-pratiques_parc-img3.CKnra-eZ.webp","width":518,"height":388,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/lieux/infos-pratiques_parc-img3.webp";
							}
							
							return target[name];
						}
					});

const ButtonLeft = createSvgComponent({"meta":{"src":"/_astro/icon_arrowcarrousel-gauche.C3IyjHwK.svg","width":18,"height":16,"format":"svg"},"attributes":{"mode":"inline","width":"18","height":"16","viewBox":"0 0 18 16","fill":"none"},"children":"\n<path d=\"M8.16671 14.0843L3.40169 9.31925H1.8328L7.38221 14.8688C7.59884 15.0854 7.95008 15.0854 8.16671 14.8688C8.38334 14.6522 8.38334 14.3009 8.16671 14.0843ZM0.5625 7.52417C0.48963 7.67569 0.48963 7.85345 0.5625 8.00497V7.52417ZM7.38221 0.66035L1.8328 6.20988H3.40169L8.16671 1.44486C8.38334 1.22823 8.38334 0.876981 8.16671 0.660354C7.95008 0.443725 7.59884 0.443725 7.38221 0.66035ZM1.5625 7.20988V8.31925H2.40169L2.20055 8.11812L1.847 7.76457L2.20055 7.41101L2.40169 7.20988H1.5625ZM17.4375 7.20988L3.8159 7.20988L3.26122 7.76457L3.8159 8.31925L17.4375 8.31925V7.20988Z\" fill=\"#A82427\" stroke=\"#A82427\" />\n"});

const ButtonRight = createSvgComponent({"meta":{"src":"/_astro/icon_arrowcarrousel.BPOOqA6O.svg","width":18,"height":16,"format":"svg"},"attributes":{"mode":"inline","width":"18","height":"16","viewBox":"0 0 18 16","fill":"none"},"children":"\n<path d=\"M9.83329 14.0843L14.5983 9.31925H16.1672L10.6178 14.8688C10.4012 15.0854 10.0499 15.0854 9.83329 14.8688C9.61666 14.6522 9.61666 14.3009 9.83329 14.0843ZM17.4375 7.52417C17.5104 7.67569 17.5104 7.85345 17.4375 8.00497V7.52417ZM10.6178 0.66035L16.1672 6.20988H14.5983L9.83329 1.44486C9.61666 1.22823 9.61666 0.876981 9.83329 0.660354C10.0499 0.443725 10.4012 0.443725 10.6178 0.66035ZM16.4375 7.20988V8.31925H15.5983L15.7994 8.11812L16.153 7.76457L15.7994 7.41101L15.5983 7.20988H16.4375ZM0.5625 7.20988L14.1841 7.20988L14.7388 7.76457L14.1841 8.31925L0.5625 8.31925L0.5625 7.20988Z\" fill=\"#A82427\" stroke=\"#A82427\" />\n"});

const $$Caroussel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div aria-labelledby="carousel-heading" class="carousel-wrapper flex flex-col items-center justify-center w-full h-full mx-auto my-8" data-astro-cid-z2zkzbcf> <div role="region" aria-live="polite" class="flex relative w-full max-w-4xl overflow-hidden md:items-center mx-auto" id="carousel-container" data-astro-cid-z2zkzbcf> <div class="carousel-slides flex transition-transform duration-300 ease-in-out" style="transform: translateX(0);" id="carousel-slides" data-astro-cid-z2zkzbcf> <div class="w-full flex-shrink-0" data-astro-cid-z2zkzbcf> <img${addAttribute(Caroussel1.src, "src")} alt="Image du parc 1" class="w-full object-cover" data-astro-cid-z2zkzbcf> </div> <div class="w-full flex-shrink-0" data-astro-cid-z2zkzbcf> <img${addAttribute(Caroussel2.src, "src")} alt="Image du parc 2" class="w-full object-cover" data-astro-cid-z2zkzbcf> </div> <div class="w-full flex-shrink-0" data-astro-cid-z2zkzbcf> <img${addAttribute(Caroussel3.src, "src")} alt="Image du parc 3" class="w-full object-cover" data-astro-cid-z2zkzbcf> </div> </div> </div> <div class="carousel-controls flex justify-center p-5 gap-5" data-astro-cid-z2zkzbcf> <button class="carousel__button--prev bg-white rounded-full border border-gray-300 shadow-sm p-3 hover:scale-110 transition-transform" aria-label="Défiler vers la gauche" id="prev-button" data-astro-cid-z2zkzbcf> <img${addAttribute(ButtonLeft.src, "src")} alt="Flèche gauche" class="w-8 h-8" data-astro-cid-z2zkzbcf> </button> <button class="carousel__button--next bg-white rounded-full border border-gray-300 shadow-sm p-3 hover:scale-110 transition-transform" aria-label="Défiler vers la droite" id="next-button" data-astro-cid-z2zkzbcf> <img${addAttribute(ButtonRight.src, "src")} alt="Flèche droite" class="w-8 h-8" data-astro-cid-z2zkzbcf> </button> </div> </div>  ${renderScript($$result, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Caroussel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Caroussel.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await getInvite();
  const title = "Infos pratiques";
  const heroAlt = "Image Hero de la page invit\xE9";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "heroImage": myImage, "heroAlt": heroAlt }, { "chapo": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid px-4 md:px-6 lg:px-8"> <p class="font-bold mt-3">
Organisez votre venue au festival de Bavilliers ! Accès, hébergements,
            lieux et infos pratiques : tout ce qu'il faut pour profiter d'un événement
            100 % gratuit.
</p> </div>`, "content": ($$result2) => renderTemplate`<div class="px-4 md:px-6 lg:px-8"> ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "subtitle": "Accessibilit\xE9 pour tous", "description": "Entr\xE9e : 100 % gratuitePour participer, il vous suffit de remplir un formulaire d'inscription disponible sur notre site ou directement \xE0 l'entr\xE9e du festival." })} </div><div class="px-4 md:px-6 lg:px-8"> ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "subtitle": "Un cadre naturel au parc de la Douce", "description": `Le festival "\xC7a va trai'ler" se tiendra au parc de la Douce, un \xE9crin de verdure \xE0 Belfort, offrant un cadre id\xE9al pour c\xE9l\xE9brer le trail running en plein air, au plus pr\xE8s de la nature.` })} <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 mb-15"> <div class="w-full"> <img${addAttribute(France.src, "src")} alt="Carte de la France" class="w-full h-auto object-cover"> </div> <div class="w-full"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2688.780103181923!2d6.834470599999999!3d47.6304056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47923c7d58b56a03%3A0x4685f1b0576de9c2!2sParc%20de%20la%20Douce!5e0!3m2!1sfr!2sfr!4v1741859765579!5m2!1sfr!2sfr" class="w-full h-full min-h-[250px]" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </div> <div class="mt-8"> ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "subtitle": "H\xE9bergements", "description": `H\xF4tels proches :
                Brit Hotel Belfort Centre  : \xE0 30 minutes \xE0 pied, \xE0 partir de 50 \u20AC/nuit
                Hotel Novotel Belfort Centre Atria : \xE0 44 minutes en voiture, \xE0 partir de 70 \u20AC/nuit

                Camping :
                Camping de l'\xC9tang des Forges - Nature et Familial

                Autres options :
                Airbnb et g\xEEtes disponibles dans les environs.` })} </div> <div class="mt-8"> ${renderComponent($$result2, "Paragraphe", $$Paragraphe, { "subtitle": "Transports", "description": `Acc\xE8s :
                En train : Gare de Belfort, \xE0 10 minutes en voiture de Bavilliers.
                En voiture : Suivez la sortie "Bavilliers Centre" depuis l'A36.
                Covoiturage : Consultez notre page d\xE9di\xE9e au partage de trajets.

                Parkings :
                Parking Principal : Gratuit (200 places disponibles).
                Parking Secondaire : Gratuit (150 places, \xE0 5 min \xE0 pied).` })} </div> <div> ${renderComponent($$result2, "Caroussel", $$Caroussel, {})} </div> <div class="mt-8"> ${renderComponent($$result2, "FAQ", $$Faq, {})} </div> </div>` })}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/infos-pratiques/index.astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/infos-pratiques/index.astro";
const $$url = "/infos-pratiques";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
