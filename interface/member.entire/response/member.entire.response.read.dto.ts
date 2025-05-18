import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberEntireRequestReadSchema = z.object({
  createAt: z.string(),
  isConsentedTermsAndConditions: z.boolean(),
  isConsentedCollectionAndUsePersonalData: z.boolean(),
  isConsentedMarketingUseAndInformationReceiving: z.boolean(),
  name: z.string(),
  email: z.string(),
  phoneNumbers: z.array(
    z.object({
      countryCallingCode: z.string(),
      phoneNumber: z.string(),
    }),
  ),
});

export type MemberEntireRequestReadType = z.infer<
  typeof MemberEntireRequestReadSchema
>;

export class MemberEntireRequestRead extends createZodDto(
  MemberEntireRequestReadSchema,
) {
  constructor(
    createAt: string,
    isConsentedTermsAndConditions: boolean,
    isConsentedCollectionAndUsePersonalData: boolean,
    isConsentedMarketingUseAndInformationReceiving: boolean,
    name: string,
    email: string,
    phoneNumbers: [{ countryCallingCode: string; phoneNumber: string }],
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
    this.phoneNumbers = phoneNumbers;
  }
}
