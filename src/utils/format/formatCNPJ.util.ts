export const formatCNPJ = async (cnpj: string) => {
  return cnpj.replace(".", "").replace("/", "").replace("-", "").replace(".", "");
};
