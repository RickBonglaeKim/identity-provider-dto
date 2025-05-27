export const PROVIDER = {
  I_SCREAM_ART: 101,
  KAKAO: 301,
  NAVER: 302,
  GOOGLE: 401,
  APPLE: 402,
} as const;

export type Providers = (typeof PROVIDER)[keyof typeof PROVIDER];
