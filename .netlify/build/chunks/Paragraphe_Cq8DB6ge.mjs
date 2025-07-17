import { c as createComponent, b as createAstro, m as maybeRenderHead, a as renderTemplate } from './astro/server_DF90g_b3.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Paragraphe = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Paragraphe;
  const { subtitle, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-4 mb-10"> <h3>${subtitle}</h3> <p>${description}</p> </div>`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Paragraphe.astro", void 0);

export { $$Paragraphe as $ };
