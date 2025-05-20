import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberEntireResponseReadSchema = z.object({
  createAt: z.string(),
  isConsentedTermsAndConditions: z.boolean(),
  isConsentedCollectionAndUsePersonalData: z.boolean(),
  isConsentedMarketingUseAndInformationReceiving: z.boolean(),
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
    isConsentedTermsAndConditions: boolean,
    isConsentedCollectionAndUsePersonalData: boolean,
    isConsentedMarketingUseAndInformationReceiving: boolean,
    name: string,
    email: string,
    phone: { countryCallingCode: string; phoneNumber: string } | null,
  ) {
    super();
    this.createAt = createAt;
    this.isConsentedTermsAndConditions = isConsentedTermsAndConditions;
    this.isConsentedCollectionAndUsePersonalData =
      isConsentedCollectionAndUsePersonalData;
    this.isConsentedMarketingUseAndInformationReceiving =
      isConsentedMarketingUseAndInformationReceiving;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
