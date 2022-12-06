import type { MarkdownInstance } from "astro";
import type { Frontmatter } from "../types";

const getPostsByLanguage = (
  posts: MarkdownInstance<Frontmatter>[],
  lang: string
): MarkdownInstance<Frontmatter>[] =>
  posts.filter(post => post.frontmatter.language === lang);

export default getPostsByLanguage;
