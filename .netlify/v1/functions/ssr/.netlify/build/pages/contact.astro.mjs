import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_DF90g_b3.mjs';
import 'kleur/colors';
/* empty css                                 */
import { c as createSvgComponent, $ as $$LayoutWithHero, I as IconFacebook, a as IconInstagram, b as IconYoutube, d as IconTikTok } from '../chunks/LayoutWithHero_lbdTD_jX.mjs';
import 'clsx';
import { g as getFilms } from '../chunks/backend_DBCoQnXg.mjs';
export { renderers } from '../renderers.mjs';

const myImage = new Proxy({"src":"/_astro/hero_contact.DXVFszpQ.webp","width":1782,"height":1173,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/hero_page/hero_contact.webp";
							}
							
							return target[name];
						}
					});

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="contact-form max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md space-y-4"> <h2 class="text-2xl font-bold text-center text-red-700 mb-6">
Formulaire de Contact
</h2> <div class="mb-4"> <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Nom Prénom : <span class="text-red-700">(Champ obligatoire)</span></label> <input type="text" id="name" name="name" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700" required> </div> <div class="mb-4"> <label for="email" class="block text-gray-700 text-sm font-bold mb-2">E-mail : <span class="text-red-700">(Champ obligatoire)</span></label> <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700" required> </div> <div class="mb-4"> <label for="requestType" class="block text-gray-700 text-sm font-bold mb-2">Type de demande</label> <input type="text" id="requestType" name="requestType" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"> </div> <div class="mb-4"> <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label> <textarea id="message" name="message" rows="4" class="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-700"></textarea> </div> <div class="text-center"> <button type="submit" class="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700">Envoyer</button> </div> </form>`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/ContactForm.astro", void 0);

const IconStrava = createSvgComponent({"meta":{"src":"/_astro/strava-icon_noir.Bjz7w_tY.svg","width":35,"height":35,"format":"svg"},"attributes":{"mode":"inline","width":"35","height":"35","viewBox":"0 0 64 64"},"children":"\r\n  <path d=\"M41.03 47.852l-5.572-10.976h-8.172L41.03 64l13.736-27.124h-8.18\" fill=\"black\" />\r\n  <path d=\"M27.898 21.944l7.564 14.928h11.124L27.898 0 9.234 36.876H20.35\" fill=\"black\" />\r\n"});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await getFilms();
  const title = "Contact";
  const heroAlt = "Image Hero de la page contact";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "heroImage": myImage, "heroAlt": heroAlt }, { "chapo": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid"> <p class="font-bold mt-3">
Pour toute question, suggestion ou demande d'information concernant le
      festival "Ça va trai'ler", n'hésitez pas à nous écrire. Nous serons ravis
      de vous aider !
</p> </div>`, "content": ($$result2) => renderTemplate`<div class="w-full max-w-4xl mx-auto px-4"> ${renderComponent($$result2, "ContactForm", $$ContactForm, {})} </div><div> <div class="max-w-3xl mx-auto mt-12 grid gap-8 md:grid-cols-2"> <div class="p-6 bg-white rounded-lg shadow-md"> <p class="text-xl font-bold mb-3 text-red-700">
Informations de contact :
</p> <p class="text-gray-700">
Adresse <br>
Festival Ça va trai'ler <br>
90800 Baviliers
</p> </div> <div class="p-6 bg-white rounded-lg shadow-md"> <p class="text-xl font-bold mb-2 text-red-700">Email</p> <p class="text-gray-700">cavatrailer@festival.com</p> </div> <div class="p-6 bg-white rounded-lg shadow-md"> <p class="text-xl font-bold mb-2 text-red-700">Téléphone</p> <p class="text-gray-700">06 12 34 56 78</p> </div> <div class="p-6 bg-white rounded-lg shadow-md"> <p class="text-xl font-bold mb-4 text-red-700">
Suivez nous sur les réseaux sociaux
</p> <div class="flex items-center gap-4 justify-center"> <a href="https://facebook.com" aria-label="facebook"> ${renderComponent($$result2, "IconFacebook", IconFacebook, {})} </a> <a href="https://instagram.com" aria-label="instagram"> ${renderComponent($$result2, "IconInstagram", IconInstagram, {})} </a> <a href="https://youtube.com" aria-label="youtube"> ${renderComponent($$result2, "IconYoutube", IconYoutube, {})} </a> <a href="https://strava.com" aria-label="strava"> ${renderComponent($$result2, "IconStrava", IconStrava, {})} </a> <a href="https://tiktok.com" aria-label="tiktok"> ${renderComponent($$result2, "IconTikTok", IconTikTok, {})} </a> </div> </div> </div> </div>` })}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/contact/index.astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
