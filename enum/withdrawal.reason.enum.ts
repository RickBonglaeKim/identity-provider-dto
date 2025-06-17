export const WITHDRAWAL_REASON = {
  CONTENTS: 'WITHDRAWAL.CONTENTS', // 컨텐츠 부족
  PRICE: 'WITHDRAWAL.PRICE', // 유료 서비스 가격이 비쌈
  SERVICE: 'WITHDRAWAL.SERVICE', // 웹/앱 서비스 이용 불편
  DRAWING: 'WITHDRAWAL.DRAWING', // 드로잉툴 사용 불편
  ETC: 'WITHDRAWAL.ETC', // 기타
} as const;

export type WithdrawalReasons =
  (typeof WITHDRAWAL_REASON)[keyof typeof WITHDRAWAL_REASON];
