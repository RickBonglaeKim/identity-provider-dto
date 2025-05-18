import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const MemberResponseReadSchema = z.object({
  id: z.number(),
  createAt: z.string(),
  isConsentedTermsAndConditions: z.boolean(),
  isConsentedCollectionAndUsePersonalData: z.boolean(),
  isConsentedMarketingUseAndInformationReceiving: z.boolean(),
});

export type MemberPhoneResponseReadType = z.infer<
  typeof MemberResponseReadSchema
>;

export class MemberResponseRead extends createZodDto(MemberResponseReadSchema) {
  constructor(
    id: number,
    createAt: string,
    isConsentedTermsAndConditions: boolean,
    isConsentedCollectionAndUsePersonalData: boolean,
    isConsentedMarketingUseAndInformationReceiving: boolean,
  ) {
    super();
    this.id = id;
    this.createAt = createAt;
    this.isConsentedTermsAndConditions = isConsentedTermsAndConditions;
    this.isConsentedCollectionAndUsePersonalData =
      isConsentedCollectionAndUsePersonalData;
    this.isConsentedMarketingUseAndInformationReceiving =
      isConsentedMarketingUseAndInformationReceiving;
  }
}
