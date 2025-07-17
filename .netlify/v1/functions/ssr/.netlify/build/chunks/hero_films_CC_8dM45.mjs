const myImage = new Proxy({"src":"/_astro/hero_films.BP2dsu_y.webp","width":1782,"height":1173,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/bryan/Documents/GitHub/site_ca-va-trailer/sae-203-2025-Thierry-Bryan/src/assets/hero_page/hero_films.webp";
							}
							
							return target[name];
						}
					});

export { myImage as m };
