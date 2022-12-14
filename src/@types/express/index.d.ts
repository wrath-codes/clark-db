declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    id_user: string;
    id_operator: string;
    id_plan: string;

    idToken: string;
    ttl: number;

    cnpj_info: {
      name: string;
      cnpj: string;
      address: {
        street: string;
        number: number;
        complement?: string;
        district: string;
        city: string;
        state: string;
        zipCode: string;
      };
    };
    benificiary_address: {
      street: string;
      complement?: string;
      district: string;
      city: string;
      state: string;
      zipCode: string;
    };
    longitude: number;
    latitude: number;
  }
}
