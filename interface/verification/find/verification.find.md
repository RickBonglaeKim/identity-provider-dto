## Request

### 아이디 찾기
#### schema
- ***name*** : 사용자 이름
- ***countryCallingCode*** : 소속 국가번호
- ***phoneNumber*** : 사용자 전화번호


### 비밀번호 찾기
#### schema
- ***email*** : 사용자 이메일
- ***countryCallingCode*** : 소속 국가번호
- ***phoneNumber*** : 사용자 전화번호


## Response
### Success Code
- ***정상 처리*** : 201
- ***회원 정보가 존재하는 경우 (이메일 또는 휴대폰번호 중복)*** : 251
- ***아이스크림아트가 아닌 다른 인증 제공자로부터 회원 가입한 경우 (카카오, 네이버, 구글, 애플)*** : 252
### Failure Code
- ***데이터 처리(CRUD) 관련 오류인 경우*** : 901 ~ 999
- ***기타 서버 오류인 경우*** : 500