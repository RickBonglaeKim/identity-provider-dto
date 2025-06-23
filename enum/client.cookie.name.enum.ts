export const CLIENT_COOKIE_NAME = {
  SERVICE_URL: 'iScreamArts-Provider',
} as const;

export type ClientCookieNames =
  (typeof CLIENT_COOKIE_NAME)[keyof typeof CLIENT_COOKIE_NAME];
