import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const ChildRequestCreateSchema = z.object({
  memberId: z.number(),
  name: z.string(),
  birthDay: z.string(),
  gender: z.union([z.literal('GENDER.MALE'), z.literal('GENDER.FEMALE')]),
});

export type ChildRequestCreateType = z.infer<typeof ChildRequestCreateSchema>;

export class ChildRequestCreate extends createZodDto(
  ChildRequestCreateSchema,
) {}
