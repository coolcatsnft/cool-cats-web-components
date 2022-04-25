export * from "./config";

export const simpleSlug = (str: string) => {
  return str.replace( /[\u0300-\u036f]/g, '' )   // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export const getSizes = () => {
  return ["", "tiny", "small", "medium", "normal", "large", "xlarge", "massive"];
}

export const getColours = () => {
  return ["default", "orange", "red", "green", "pale-green", "pink", "light-blue", "simple-yellow", "yellow", "grey", "white", "black", "opensea", "disabled", "listed", "purchase", "selected", "error", "warning", "success", "info", "fire", "water", "grass", "air", "common", "uncommon", "rare", "epic", "legendary", "cool_1", "cool_2", "wild_1", "wild_2", "classy_1", "classy_2", "exotic_1", "exotic_2"];
}
