export const autoHypenBirthday = str => {
  str = str.replace(/[^0-9]/g, '');
  let tmp = '';
  if (str.length < 5) {
    return str;
  } else if (str.length < 7) {
    tmp += str.substr(0, 4);
    tmp += '-';
    tmp += str.substr(4);
    return tmp;
  } else if (str.length < 9) {
    tmp += str.substr(0, 4);
    tmp += '-';
    tmp += str.substr(4, 2);
    tmp += '-';
    tmp += str.substr(6);
    return tmp;
  } else {
    tmp += str.substr(0, 4);
    tmp += '-';
    tmp += str.substr(4, 2);
    tmp += '-';
    tmp += str.substr(6);
    return tmp;
  }
};

export const validation = {
  name: /^[가-힣]{2,4}$/,
  phoneNumber: /^[0-9\b -]{11}$/,
  birthday:
    /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/,
  notKorean: /[a-z0-9]|[[\]{}()<>?|`~!@#$%^&*-_+=,.;:"'\\]/g,
  number: /[^0-9]/g,
};
