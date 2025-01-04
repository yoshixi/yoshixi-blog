import kebabcase from "lodash.kebabcase";

export const slugifyStr = (str: string) => kebabcase(str);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export const resolvedSlugPath = (slug: string) => slug.replace(/\//g, "-");
