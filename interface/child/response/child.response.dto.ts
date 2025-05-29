import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const ChildResponseSchema = z.object({
  id: z.number(),
  createdAt: z.string(),
  name: z.string().nullable(),
  birthDay: z.string().nullable(),
  gender: z.string().nullable(),
});

export type ChildResponseType = z.infer<typeof ChildResponseSchema>;

export class ChildResponse extends createZodDto(ChildResponseSchema) {
  constructor(
    id: number,
    createdAt: string,
    name: string | null,
    birthDay: string | null,
    gender: string | null,
  ) {
    super();
    this.id = id;
    this.createdAt = createdAt;
    this.name = name;
    this.birthDay = birthDay;
    this.gender = gender;
  }
}
