import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberRequestCreateSchema = z.object({
  isConsentedTermsAndConditions: z.boolean(),
  isConsentedCollectionAndUsePersonalData: z.boolean(),
  isConsentedMarketingUseAndInformationReceiving: z.boolean(),
});

export type MemberRequestCreateType = z.infer<typeof MemberRequestCreateSchema>;

export class MemberRequestCreate extends createZodDto(
  MemberRequestCreateSchema,
) {}
