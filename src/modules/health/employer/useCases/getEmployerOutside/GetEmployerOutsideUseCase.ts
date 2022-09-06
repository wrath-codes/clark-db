interface IGetEmployerOutside {
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
  latitude: number;
  longitude: number;
}

export class GetEmployerOutsideUseCase {
  async execute({ cnpj_info, latitude, longitude }: IGetEmployerOutside) {
    return {
      name: cnpj_info.name,
      cnpj: await cnpj_info.cnpj,
      address: {
        street: cnpj_info.address.street,
        number: Number(cnpj_info.address.number),
        complement: cnpj_info.address.complement,
        neighborhood: cnpj_info.address.district,
        city: cnpj_info.address.city,
        state: cnpj_info.address.state,
        zipCode: cnpj_info.address.zipCode,
        latitude,
        longitude,
      },
    };
  }
}
