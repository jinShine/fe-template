export const REG_EXPRESSION = {
  // EMAIL: 숫자 또는 알파벳 문자로 시작, [하이픈, 밑줄, 점, 또는 문자와 숫]자의 조합, @, 최상위 도메인(TLD)
  EMAIL: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,

  // PASSWORD: 숫자, 영문자, 특수문자를 조합하여 8글자 이상, 허용되는 특수 문자 !@#$%^&*()_+{}[]:;<>,.?~\-
  PASSWORD: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{8,}$/,

  // PHONE_NUMBER_ONLY: 숫자 11자리
  PHONE_NUMBER_ONLY: /^01[0-9]{9}$/,

  // PHONE: 숫자 010-0000-0000
  PHONE: /^01[0-9]{1}-[0-9]{4}-[0-9]{4}$/,

  /* 유선 전화 번호 */
  유선전화번호: /^(0[2-8][0-5]?)-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/,

  /* 유전 전화 + 휴대폰 번호 */
  유선전화_휴대폰번호: /^(0[2-8][0-5]?|01[01346-9])-?([1-9]{1}[0-9]{2,3})-?([0-9]{4})$/,

  /* 대표전화번호 1588 등 */
  대표전화번호: /^(1544|1566|1577|1588|1644|1688)-?([0-9]{4})$/,

  // 사업자등록번호
  BUSINESS_NUMBER: /([0-9]{3})-?([0-9]{2})-?([0-9]{5})/,

  // MAX_LIMIT_11: 숫자 11자리까지 허용
  MAX_LIMIT_11: /^\d{0,11}$/,

  // NO_WHITE_SPACE: 공백 불가
  NO_WHITE_SPACE: /^\S+$/,

  // 영어와 숫자만 입력 (alnum)
  ONLY_ALPHABET_NUMBER: /^[0-9a-zA-Z]+$/,

  // 한글만 입력
  ONLY_KOR: /^[ㄱ-힣]+$/,

  // NO_KOR: 한국어 불가
  NO_KOR:
    /^[^\u3131-\uD79D\uAC00-\uD7A3\uFFA1-\uFFDC\u1100-\u11FF\u3130-\u318F\uAC00-\uD7AF\uFF00-\uFFEF\u2000-\u206F\u3000-\u303F]*$/,

  // 영어만 입력
  ONLY_ENGLISH: /^[a-zA-Z]+$/,

  // 숫자만 입력
  ONLY_NUMBER: /^[0-9]+$/,

  // NO_NUMBER: 숫자 불가
  NO_NUMBER: /^[^0-9]*$/,
};
