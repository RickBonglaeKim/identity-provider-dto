import { GENDER } from 'dto/enum/gender.enum';
import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const ChildRequestCreateSchema = z.object({
  name: z.string(),
  birthDay: z.string(),
  gender: z.nativeEnum(GENDER),
});

export type ChildRequestCreateType = z.infer<typeof ChildRequestCreateSchema>;

export class ChildRequestCreate extends createZodDto(
  ChildRequestCreateSchema,
) {}
