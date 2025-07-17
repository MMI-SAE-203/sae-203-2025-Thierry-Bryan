import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_DF90g_b3.mjs';
import 'kleur/colors';
/* empty css                                 */
import { e as $$Button, $ as $$LayoutWithHero } from '../chunks/LayoutWithHero_lbdTD_jX.mjs';
import { m as myImage } from '../chunks/hero_invites_7kSIY1RK.mjs';
import { $ as $$ImagePB } from '../chunks/ImagePB_Boz4s9ar.mjs';
import { b as getInvite } from '../chunks/backend_DBCoQnXg.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { ...invite } = Astro2.props;
  console.log(invite);
  return renderTemplate`${maybeRenderHead()}<article class="flex flex-col gap-4"> <a${addAttribute(`/invite/${invite.id}`, "href")}> ${renderComponent($$result, "ImagePB", $$ImagePB, { "record": invite, "field": "photo_invite", "alt": invite.photo_invite, "classPicture": "duotone col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal" })} </a> <h2>${invite.titre_invite}</h2> <p>${invite.description_invite}</p> <div class="flex justify-center"> ${renderComponent($$result, "Button", $$Button, { "variant": "default", "url": `/invite/${invite.id}`, "text": `En savoir plus sur ${invite.prenom_invite} ${invite.nom_invite}` })} </div> </article>`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Card.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const invite = await getInvite();
  const title = "Invit\xE9s";
  const heroAlt = "Image Hero de la page invit\xE9";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": title, "heroImage": myImage, "heroAlt": heroAlt }, { "chapo": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid"> <p class="font-bold mt-3">
Cette année, nous accueillons des athlètes, des réalisateurs et des
      experts en technologie pour partager leurs histoires et leur passion.
</p> </div>`, "content": ($$result2) => renderTemplate`<div class=""> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${invite.map((i) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { ...i })}`)} </div> </div>` })}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/invite/index.astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/invite/index.astro";
const $$url = "/invite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
