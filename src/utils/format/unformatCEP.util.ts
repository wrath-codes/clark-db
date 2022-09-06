export const unformatCEP = async (cep: string) => {
  return cep.replace(".", "").replace("-", "");
};
