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
    password: z.string().min(8).max(256).optional(),
    duplicationType: z
      .nativeEnum(DUPLICATION_TYPE)
      .optional()
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
        'The memberProviderKey is required when the providerId is not I_SCREAM_ART',
    },
  )
  .refine(
    (data) => {
      if (data.providerId === PROVIDER.I_SCREAM_ART && !data.password) {
        return false;
      }
      return true;
    },
    {
      message: 'The password is required when the providerId is I_SCREAM_ART',
    },
  );

export type MemberDetailRequestCreateType = z.infer<
  typeof MemberDetailRequestCreateSchema
>;

export class MemberDetailRequestCreate extends createZodDto(
  MemberDetailRequestCreateSchema,
) {}
