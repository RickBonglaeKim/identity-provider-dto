import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberRequestCreateSchema = z.object({
  isConsentedArtBonbonTermsAndConditions: z.boolean(),
  isConsentedILandTermsAndConditions: z.boolean(),
  isConsentedGalleryBonbonTermsAndConditions: z.boolean(),
  isConsentedCollectionAndUsePersonalData: z.boolean(),
  isConsentedUseAiSketchService: z.boolean(),
  isConsentedOver14Years: z.boolean(),
  isConsentedEventAndInformationReceiving: z.boolean(),
});

export type MemberRequestCreateType = z.infer<typeof MemberRequestCreateSchema>;

export class MemberRequestCreate extends createZodDto(
  MemberRequestCreateSchema,
) {}
