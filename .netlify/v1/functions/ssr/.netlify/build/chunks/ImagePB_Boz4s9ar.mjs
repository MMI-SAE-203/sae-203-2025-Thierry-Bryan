import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate } from './astro/server_DF90g_b3.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from './_astro_assets_B9knaOuE.mjs';
import { p as pb } from './backend_DBCoQnXg.mjs';

const $$Astro = createAstro();
const $$ImagePB = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImagePB;
  const {
    record,
    field = "imgUrl",
    alt,
    classPicture,
    classImg,
    thumb = "1024x1024"
  } = Astro2.props;
  const imageUrl = record?.[field] ? pb.files.getURL(record, record[field], { thumb }) : null;
  console.log(imageUrl);
  return renderTemplate`${imageUrl && renderTemplate`${renderComponent($$result, "Picture", $$Picture, { "pictureAttributes": { class: classPicture }, "class": classImg, "inferSize": true, "formats": ["avif", "webp"], "alt": alt || "Image", "src": imageUrl })}`}`;
}, "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/ImagePB.astro", void 0);

export { $$ImagePB as $ };
