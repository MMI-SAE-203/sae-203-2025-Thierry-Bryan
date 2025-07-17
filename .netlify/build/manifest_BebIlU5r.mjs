import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_DF90g_b3.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/","cacheDir":"file:///C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/node_modules/.astro/","outDir":"file:///C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/dist/","srcDir":"file:///C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/","publicDir":"file:///C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/public/","buildClientDir":"file:///C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/dist/","buildServerDir":"file:///C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B-XSbOsg.css"}],"routeData":{"route":"/a-propos","isIndex":true,"type":"page","pattern":"^\\/a-propos\\/?$","segments":[[{"content":"a-propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/a-propos/index.astro","pathname":"/a-propos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B-XSbOsg.css"}],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B-XSbOsg.css"}],"routeData":{"route":"/films/[id]","isIndex":false,"type":"page","pattern":"^\\/films\\/([^/]+?)\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/films/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B-XSbOsg.css"}],"routeData":{"route":"/films","isIndex":true,"type":"page","pattern":"^\\/films\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/films/index.astro","pathname":"/films","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B-XSbOsg.css"},{"type":"inline","content":".faq-answer[data-astro-cid-z6gx6xcw]{max-height:0}.faq-icon[data-astro-cid-z6gx6xcw]{transition:transform .3s ease}.rotate-45[data-astro-cid-z6gx6xcw]{transform:rotate(45deg)}.carousel-slides[data-astro-cid-z2zkzbcf]{width:300%}.carousel-wrapper[data-astro-cid-z2zkzbcf]{display:flex;justify-content:center;align-items:center;min-height:50vh}\n"}],"routeData":{"route":"/infos-pratiques","isIndex":true,"type":"page","pattern":"^\\/infos-pratiques\\/?$","segments":[[{"content":"infos-pratiques","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/infos-pratiques/index.astro","pathname":"/infos-pratiques","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B-XSbOsg.css"}],"routeData":{"route":"/invite/[id]","isIndex":false,"type":"page","pattern":"^\\/invite\\/([^/]+?)\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invite/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B-XSbOsg.css"}],"routeData":{"route":"/invite","isIndex":true,"type":"page","pattern":"^\\/invite\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite/index.astro","pathname":"/invite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B-XSbOsg.css"}],"routeData":{"route":"/programmes","isIndex":true,"type":"page","pattern":"^\\/programmes\\/?$","segments":[[{"content":"programmes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programmes/index.astro","pathname":"/programmes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.B-XSbOsg.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/a-propos/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/films/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/films/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/infos-pratiques/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/invite/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/invite/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/pages/programmes/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/a-propos/index@_@astro":"pages/a-propos.astro.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/films/[id]@_@astro":"pages/films/_id_.astro.mjs","\u0000@astro-page:src/pages/films/index@_@astro":"pages/films.astro.mjs","\u0000@astro-page:src/pages/infos-pratiques/index@_@astro":"pages/infos-pratiques.astro.mjs","\u0000@astro-page:src/pages/invite/[id]@_@astro":"pages/invite/_id_.astro.mjs","\u0000@astro-page:src/pages/invite/index@_@astro":"pages/invite.astro.mjs","\u0000@astro-page:src/pages/programmes/index@_@astro":"pages/programmes.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BebIlU5r.mjs","C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CRmeoM3z.mjs","C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Faq.astro?astro&type=script&index=0&lang.ts":"_astro/Faq.astro_astro_type_script_index_0_lang.DhXz8LsM.js","C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Caroussel.astro?astro&type=script&index=0&lang.ts":"_astro/Caroussel.astro_astro_type_script_index_0_lang.BkMuQ_rn.js","C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Card_films.astro?astro&type=script&index=0&lang.ts":"_astro/Card_films.astro_astro_type_script_index_0_lang.uYvPWwro.js","C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DO4CWw4M.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Faq.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".faq-question\").forEach(n=>{n.addEventListener(\"click\",()=>{const e=n.nextElementSibling,s=n.querySelector(\".faq-icon\"),o=e.classList.contains(\"active\");document.querySelectorAll(\".faq-answer\").forEach(t=>{t.classList.remove(\"active\"),t.style.maxHeight=\"0px\",t.previousElementSibling.querySelector(\".faq-icon\").textContent=\"+\",t.previousElementSibling.querySelector(\".faq-icon\").classList.remove(\"rotate-45\")}),o||(e.classList.add(\"active\"),e.style.maxHeight=e.scrollHeight+\"px\",s.textContent=\"-\",s.classList.add(\"rotate-45\"))})})});"],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Caroussel.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const o=document.getElementById(\"carousel-slides\"),u=document.getElementById(\"prev-button\"),i=document.getElementById(\"next-button\");let e=0;const d=3;let c=0,r=0;function n(t){t<0?e=d-1:t>=d?e=0:e=t;const s=-e*100;o.style.transform=`translateX(${s}%)`}u.addEventListener(\"click\",()=>{n(e-1)}),i.addEventListener(\"click\",()=>{n(e+1)}),o.addEventListener(\"touchstart\",t=>{c=t.changedTouches[0].screenX},{passive:!0}),o.addEventListener(\"touchend\",t=>{r=t.changedTouches[0].screenX,l()},{passive:!0});function l(){const s=c-r;Math.abs(s)<50||(s>0?n(e+1):n(e-1))}n(0)});"],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Card_films.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{document.querySelectorAll(\".favorite-button\").forEach(e=>{e.addEventListener(\"click\",async o=>{o.preventDefault(),o.stopPropagation();const a=e.getAttribute(\"data-id\"),r=!(e.getAttribute(\"data-favorite\")===\"true\");try{if((await fetch(`http://localhost:8090/api/collections/film/records/${a}`,{method:\"PATCH\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({favoris_film:r})})).ok){e.setAttribute(\"data-favorite\",String(r));const t=e.querySelector(\"svg\");r?(t.classList.add(\"stroke-red-700\"),t.classList.remove(\"stroke-gray-400\")):(t.classList.add(\"stroke-gray-400\"),t.classList.remove(\"stroke-red-700\"))}else console.error(\"Erreur lors de la mise à jour du favori\")}catch(s){console.error(\"Erreur:\",s)}})})});"],["C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),o=document.querySelector(\"#menu\"),c=document.body;e&&o&&e.addEventListener(\"click\",()=>{const n=e.ariaExpanded===\"true\",t=!n;e.ariaExpanded=String(t),o.ariaHidden=String(n),c.classList.toggle(\"noscroll\",t)});"]],"assets":["/_astro/accueil_arte.Dj1bCZfv.webp","/_astro/accueil_canon.DIcrpyfU.webp","/_astro/accueil_france3.CBhR_3DQ.webp","/_astro/accueil_rcf-radio.Dj3YrAM4.webp","/_astro/hero_accueil.Cj5uddm2.webp","/_astro/accueil_credit-agricole.m_luNA9a.webp","/_astro/accueil_salomon.CZ3TlzBo.webp","/_astro/accueil_wwf.DFMEHWTQ.webp","/_astro/icon_insta-noir.omKvxZqN.svg","/_astro/icon_tiktok-noir.Df4rNUg1.svg","/_astro/icon_facebook-noir.C70DKvUf.svg","/_astro/hero_contact.DXVFszpQ.webp","/_astro/hero_invites.BAudlr_N.webp","/_astro/icon_youtube-noir.DsWOoedp.svg","/_astro/strava-icon_noir.Bjz7w_tY.svg","/_astro/hero_a-propos.BTqEArsq.webp","/_astro/hero_infos.BpWHK38R.webp","/_astro/infos-pratiques_carte-france.Xy8dW7ry.webp","/_astro/hero_films.BP2dsu_y.webp","/_astro/icon_love.1EUqqUw8.svg","/_astro/icon_arrowcarrousel-gauche.C3IyjHwK.svg","/_astro/infos-pratiques_parc-img1.DrtoaZrF.webp","/_astro/infos-pratiques_parc-img2.LO4Ma8g8.webp","/_astro/icon_arrowcarrousel.BPOOqA6O.svg","/_astro/infos-pratiques_parc-img3.CKnra-eZ.webp","/_astro/icon_facebook-blanc.BywASDr8.svg","/_astro/icon_insta-blanc.C44cYYFw.svg","/_astro/icon_youtube-blanc.vMjpgIep.svg","/_astro/strava-icon.DI0R2Okh.svg","/_astro/icon_logo.g-rMozLv.svg","/_astro/icon_tiktok-blanc.T7hVW8T1.svg","/_astro/icon_strava-noir.1DfShzf1.svg","/_astro/montserrat-latin-ext-wght-normal.BLkAzDQP.woff2","/_astro/montserrat-vietnamese-wght-normal.BcziCZ2I.woff2","/_astro/montserrat-cyrillic-wght-normal.D3on441i.woff2","/_astro/montserrat-cyrillic-ext-wght-normal.DV_LRdWn.woff2","/_astro/anton-vietnamese-400-normal.Ophpuo_x.woff2","/_astro/montserrat-latin-wght-normal.AeMhpAKq.woff2","/_astro/anton-latin-ext-400-normal.C4DWxNwG.woff2","/_astro/anton-latin-400-normal.CgrieXVz.woff2","/_astro/anton-vietnamese-400-normal.B7WhQ-gz.woff","/_astro/anton-latin-400-normal.B3yWuKjA.woff","/_astro/anton-latin-ext-400-normal.BGzEkNa2.woff","/_astro/index.B-XSbOsg.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"y5g66dPT9O1sg/k9jrFpCV1uBRpcVnR2jPM11rTGZaY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
