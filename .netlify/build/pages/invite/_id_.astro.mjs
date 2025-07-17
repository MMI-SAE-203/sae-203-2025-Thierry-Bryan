import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DF90g_b3.mjs';
import 'kleur/colors';
/* empty css                                    */
import { $ as $$LayoutWithHero } from '../../chunks/LayoutWithHero_lbdTD_jX.mjs';
import { m as myImage } from '../../chunks/hero_invites_7kSIY1RK.mjs';
import { $ as $$ImagePB } from '../../chunks/ImagePB_Boz4s9ar.mjs';
import { c as getInviteByID } from '../../chunks/backend_DBCoQnXg.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const invite = await getInviteByID(id);
  if (!invite) {
    return Astro2.redirect("/invite");
  }
  const heroAlt = "Image Hero de la page invit\xE9";
  return renderTemplate`${renderComponent($$result, "LayoutWithHero", $$LayoutWithHero, { "title": `${invite.prenom_invite} ${invite.nom_invite}`, "heroImage": myImage, "heroAlt": heroAlt }, { "chapo": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="grid"> <p> ${invite.chapo_invite} </p> </div>`, "content": ($$result2) => renderTemplate`<div class=""> <button onclick="history.back()" class="mb-6 px-4 py-2 bg-primary text-red-700 font-bold rounded-md hover:bg-primary-dark transition-colors">
&larr; Retour
</button> <div> ${renderComponent($$result2, "ImagePB", $$ImagePB, { "record": invite, "field": "photo_invite", "alt": invite.photo_invite, "classPicture": "duotone col-start-1 row-start-1 col-span-2 row-span-2 group-hover:before:bg-black", "classImg": "group-hover:grayscale-0 group-hover:mix-blend-normal" })} </div> <div class="flex flex-col gap-4 mb-10"> <h3 class="mt-4">Biographie</h3> <p>${invite.bio_invite}</p> </div> <div> <h3>Intervention</h3> <p>${invite.intervention}</p> </div> </div>` })}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/invite/[id].astro", void 0);

const $$file = "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/invite/[id].astro";
const $$url = "/invite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
