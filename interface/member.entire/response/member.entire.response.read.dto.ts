import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberEntireResponseReadSchema = z.object({
  createAt: z.string(),
  isConsentedArtBonbonTermsAndConditions: z.boolean(),
  isConsentedILandTermsAndConditions: z.boolean(),
  isConsentedGalleryBonbonTermsAndConditions: z.boolean(),
  isConsentedCollectionAndUsePersonalData: z.boolean(),
  isConsentedUseAiSketchService: z.boolean(),
  isConsentedOver14Years: z.boolean(),
  isConsentedEventAndInformationReceiving: z.boolean(),
  name: z.string(),
  email: z.string(),
  phone: z
    .object({
      countryCallingCode: z.string(),
      phoneNumber: z.string(),
    })
    .nullable(),
});

export type zMemberEntireResponseReadType = z.infer<
  typeof MemberEntireResponseReadSchema
>;

export class MemberEntireResponseRead extends createZodDto(
  MemberEntireResponseReadSchema,
) {
  constructor(
    createAt: string,
    isConsentedArtBonbonTermsAndConditions: boolean,
    isConsentedILandTermsAndConditions: boolean,
    isConsentedGalleryBonbonTermsAndConditions: boolean,
    isConsentedCollectionAndUsePersonalData: boolean,
    isConsentedUseAiSketchService: boolean,
    isConsentedOver14Years: boolean,
    isConsentedEventAndInformationReceiving: boolean,
    name: string,
    email: string,
    phone: { countryCallingCode: string; phoneNumber: string } | null,
  ) {
    super();
    this.createAt = createAt;
    this.isConsentedArtBonbonTermsAndConditions =
      isConsentedArtBonbonTermsAndConditions;
    this.isConsentedILandTermsAndConditions =
      isConsentedILandTermsAndConditions;
    this.isConsentedGalleryBonbonTermsAndConditions =
      isConsentedGalleryBonbonTermsAndConditions;
    this.isConsentedCollectionAndUsePersonalData =
      isConsentedCollectionAndUsePersonalData;
    this.isConsentedUseAiSketchService = isConsentedUseAiSketchService;
    this.isConsentedOver14Years = isConsentedOver14Years;
    this.isConsentedEventAndInformationReceiving =
      isConsentedEventAndInformationReceiving;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
