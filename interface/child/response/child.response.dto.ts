import { GENDER, Genders } from 'dto/enum/gender.enum';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const ChildResponseSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  name: z.string(),
  birthDay: z.string(),
  gender: z.string(),
  artBonBonStudentId: z.string().nullable(),
});

export type ChildResponseType = z.infer<typeof ChildResponseSchema>;

export class ChildResponse extends createZodDto(ChildResponseSchema) {
  constructor(
    id: number,
    createdAt: string,
    name: string,
    birthDay: string,
    gender: string,
    artBonBonStudentId: string | null,
  ) {
    super();
    this.id = id;
    this.createdAt = createdAt;
    this.name = name;
    this.birthDay = birthDay;
    this.gender = gender;
    this.artBonBonStudentId = artBonBonStudentId;
  }
}
