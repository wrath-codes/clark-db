import { prisma } from "@database/prismaClient";

interface IEditContactEmployer {
  id_employer: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export class EditContactEmployerUseCase {
  async execute({
    id_employer,
    firstName,
    lastName,
    email,
    phone,
  }: IEditContactEmployer) {
    const employer = await prisma.employer.update({
      where: { id: id_employer },
      data: {
        contact: {
          update: {
            firstName,
            lastName,
            email,
            phone,
          },
        },
      },
      include: {
        contact: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
          },
        },
      },
    });

    return employer;
  }
}
