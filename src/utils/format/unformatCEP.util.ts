export const formatCEP = async (cep: string) => {
  return cep.replace(".", "").replace("-", "");
};
