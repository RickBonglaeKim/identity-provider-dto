import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberRequestCreateSchema = z.object({
  isConsentedArtBonbonTermsAndConditions: z.literal(true),
  isConsentedILandTermsAndConditions: z.literal(true),
  isConsentedGalleryBonbonTermsAndConditions: z.literal(true),
  isConsentedCollectionAndUsePersonalData: z.literal(true),
  isConsentedUseAiSketchService: z.literal(true),
  isConsentedOver14Years: z.literal(true),
  isConsentedEventAndInformationReceiving: z.boolean(),
});

export type MemberRequestCreateType = z.infer<typeof MemberRequestCreateSchema>;

export class MemberRequestCreate extends createZodDto(
  MemberRequestCreateSchema,
) {}
