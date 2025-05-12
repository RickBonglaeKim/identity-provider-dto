import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const OauthTokenRequestSchema = z.object({
  client_id: z.string().length(32),
  redirect_uri: z.string().url(),
  grant_type: z.literal('authorization_code'),
  code: z.string().length(32),
});

export type OauthTokenRequestType = z.infer<typeof OauthTokenRequestSchema>;

export class OauthTokenRequest extends createZodDto(OauthTokenRequestSchema) {}
