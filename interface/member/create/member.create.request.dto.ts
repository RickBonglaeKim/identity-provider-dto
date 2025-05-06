import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberCreateRequestSchema = z.object({
  isConsentedTermsAndConditions: z.boolean(),
  isConsentedCollectionAndUsePersonalData: z.boolean(),
  isConsentedMarketingUseAndInformationReceiving: z.boolean(),
});

export type MemberCreateRequestType = z.infer<typeof MemberCreateRequestSchema>;

export class MemberCreateRequest extends createZodDto(
  MemberCreateRequestSchema,
) {}
