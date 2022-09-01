import slugify from "slugify";

/**
 * @description Slugify a name
 * @param name - The name to slugify
 * @returns {string} - slugified name
 * @example
 * slugifyName("Hello World"); // "hello-world"
 * @author Raphael Vaz
 */

export const slugifyName = async (name: string) => {
  const newName = slugify(`${name}`, {
    lower: true,
    strict: true,
    remove: /[*+~.()'"!:@]/g,
  });
  return newName;
};
