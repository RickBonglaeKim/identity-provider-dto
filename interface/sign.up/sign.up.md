## Request
### 이메일 회원가입
#### member schema
- ***isConsentedArtBonbonTermsAndConditions*** : 아트봉봉 통합회원서비스 이용약관 동의 (필수)
- ***isConsentedILandTermsAndConditions*** : 빛나는 아이나라 이용약관 동의 (필수)
- ***isConsentedGalleryBonbonTermsAndConditions*** : 갤러리봉봉 이용약관 동의 (필수)
- ***isConsentedCollectionAndUsePersonalData*** : 개인정보 수집 및 이용 동의 여부 (필수)
- ***isConsentedUseAiSketchService*** : AI스케치 서비스 이용 동의 (필수)
- ***isConsentedOver14Years*** : 만 14세 이상입니다 (필수)
- ***isConsentedEventAndInformationReceiving*** : 이벤트 등 메일/문자/앱푸시 수신 동의 (선택)
#### memberDetail schema
- ***providerId*** : 인증제공자 ID (dto/enum/provider.enum)
- ***memberProviderKey*** : 인증제공자 회원 ID (Kakao, Naver, Google, Apple 필수)
- ***name*** : 사용자 이름
- ***email*** : 사용자 이메일
- ***password*** : 사용자 비밀번호
- ***duplicationType*** : 중복 타입 (DUPLICATION_TYPE.NONE 으로 고정)
### 이메일과 전화번호 회원가입
#### member schema
- ***isConsentedTermsAndConditions*** : 이용약관 동의 여부
- ***isConsentedCollectionAndUsePersonalData*** : 개인정보 수집 및 이용 동의 여부
- ***isConsentedMarketingUseAndInformationReceiving*** : 마케팅 사용 및 정보 수신 동의 여부
#### memberDetail schema
- ***providerId*** : 인증제공자 ID (dto/enum/provider.enum)
- ***memberProviderKey*** : 인증제공자 회원 ID (Kakao, Naver, Google, Apple 필수)
- ***name*** : 사용자 이름
- ***email*** : 사용자 이메일
- ***password*** : 사용자 비밀번호
- ***duplicationType*** : 중복 타입 (DUPLICATION_TYPE.NONE 으로 고정)
#### memberPhone schema
- ***memberPhoneId*** : 회원 전화번호 ID (사용할 필요 없음)
- ***countryCallingCode*** : 국가번호
- ***phoneNumber*** : 전화번호 (휴대폰)

## Response
### Success Code
- ***정상 처리*** : 201
- ***회원 정보가 존재하는 경우 (이메일 또는 휴대폰번호 중복)*** : 251
### Failure Code
- ***passport가 전송되지 않은 경우*** : 401
- ***passport를 찾을 수 없는 경우*** : 403
- ***데이터 처리(CRUD) 관련 오류인 경우*** : 901 ~ 999
- ***기타 서버 오류인 경우*** : 500