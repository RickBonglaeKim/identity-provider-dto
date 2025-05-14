import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const OauthTokenRequestCreateSchema = z.object({
  client_id: z.string().length(32),
  redirect_uri: z.string().url(),
  grant_type: z.literal('authorization_code'),
  code: z.string().length(32),
});

export type OauthTokenRequestCreateType = z.infer<
  typeof OauthTokenRequestCreateSchema
>;

export class OauthTokenRequestCreate extends createZodDto(
  OauthTokenRequestCreateSchema,
) {}
