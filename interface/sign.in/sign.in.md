## Request

- ***email*** : 사용자 이메일
- ***password*** : 사용자 비밀번호

## Response
### Success Code
- ***정상 처리*** : 201
- ***회원 정보가 없는 경우*** : 299
### Failure Code
- ***passport가 전송되지 않은 경우*** : 401
- ***passport를 찾을 수 없는 경우*** : 403
- ***데이터 처리(CRUD) 관련 오류인 경우*** : 901 ~ 999
- ***기타 서버 오류인 경우*** : 500

