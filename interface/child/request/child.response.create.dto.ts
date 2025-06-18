import { GENDER, Genders } from 'dto/enum/gender.enum';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const ChildResponseCreateSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  name: z.string(),
  birthDay: z.string(),
  gender: z.nativeEnum(GENDER),
});

export type ChildResponseCreateType = z.infer<typeof ChildResponseCreateSchema>;

export class ChildResponseCreate extends createZodDto(
  ChildResponseCreateSchema,
) {
  constructor(
    id: number,
    createdAt: string,
    name: string,
    birthDay: string,
    gender: Genders,
  ) {
    super();
    this.id = id;
    this.createdAt = createdAt;
    this.name = name;
    this.birthDay = birthDay;
    this.gender = gender;
  }
}
