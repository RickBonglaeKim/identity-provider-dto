import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { PROVIDER } from 'dto/enum/provider.enum';
import { DUPLICATION_TYPE } from 'dto/enum/duplication.type.enum';

export const MemberDetailRequestCreateSchema = z.object({
  providerId: z.nativeEnum(PROVIDER),
  name: z.string().min(2).max(32),
  email: z.string().email().max(64),
  password: z.string().min(8).max(256),
  duplicationType: z
    .literal(DUPLICATION_TYPE.NONE)
    .default(DUPLICATION_TYPE.NONE),
});

export type MemberDetailRequestCreateType = z.infer<
  typeof MemberDetailRequestCreateSchema
>;

export class MemberDetailRequestCreate extends createZodDto(
  MemberDetailRequestCreateSchema,
) {}
