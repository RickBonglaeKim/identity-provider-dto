import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { PROVIDER } from 'dto/enum/provider.enum';
import { DUPLICATION_TYPE } from 'dto/enum/duplication.type.enum';

export const MemberDetailRequestCreateSchema = z
  .object({
    providerId: z.nativeEnum(PROVIDER),
    memberProviderKey: z.string().optional(),
    name: z.string().min(2).max(32),
    email: z.string().email().max(64),
    password: z.string().min(8).max(256),
    duplicationType: z
      .literal(DUPLICATION_TYPE.NONE)
      .default(DUPLICATION_TYPE.NONE),
  })
  .refine(
    (data) => {
      if (
        data.providerId !== PROVIDER.I_SCREAM_ART &&
        !data.memberProviderKey
      ) {
        return false;
      }
      return true;
    },
    {
      message:
        'memberProviderKey is required when providerId is not I_SCREAM_ART',
    },
  );

export type MemberDetailRequestCreateType = z.infer<
  typeof MemberDetailRequestCreateSchema
>;

export class MemberDetailRequestCreate extends createZodDto(
  MemberDetailRequestCreateSchema,
) {}
