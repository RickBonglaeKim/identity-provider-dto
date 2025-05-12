import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const OauthTokenResponseSchema = z.object({
  token_type: z.literal('bearer'),
  access_token: z.string().length(128),
  id_token: z.string(),
  expires_in: z.number(),
  refresh_token: z.string().length(256),
  refresh_token_expires_in: z.number(),
  scope: z.string().optional(),
});

export type OauthTokenResponseType = z.infer<typeof OauthTokenResponseSchema>;

export class OauthTokenResponse extends createZodDto(OauthTokenResponseSchema) {
  constructor(
    accessToken: string,
    idToken: string,
    expiresIn: number,
    refreshToken: string,
    refreshTokenExpiresIn: number,
  ) {
    super();
    this.token_type = 'bearer';
    this.access_token = accessToken;
    this.id_token = idToken;
    this.expires_in = expiresIn;
    this.refresh_token = refreshToken;
    this.refresh_token_expires_in = refreshTokenExpiresIn;
  }
}
