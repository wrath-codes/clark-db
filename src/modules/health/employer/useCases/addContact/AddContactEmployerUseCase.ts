import { prisma } from "@database/prismaClient";

interface IAddContactEmployer {
  id_employer: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}
export class AddContactEmployerUseCase {
  async execute({
    id_employer,
    firstName,
    lastName,
    email,
    phone,
  }: IAddContactEmployer) {
    const employerWithContact = await prisma.employer.update({
      where: { id: id_employer },
      data: {
        contact: {
          create: {
            firstName,
            lastName,
            email,
            phone,
          },
        },
      },
      include: { contact: true },
    });

    return employerWithContact;
  }
}
