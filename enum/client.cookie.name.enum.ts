
export const CLIENT_COOKIE_NAME = {
  PROVIDER: 'iScreamArts-Provider',
} as const;

export type ClientCookieNames =
  (typeof CLIENT_COOKIE_NAME)[keyof typeof CLIENT_COOKIE_NAME];
