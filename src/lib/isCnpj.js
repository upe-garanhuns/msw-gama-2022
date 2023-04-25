import assertString from './util/assertString';

const BLACKLIST = [
  '00000000000000',
  '11111111111111',
  '22222222222222',
  '33333333333333',
  '44444444444444',
  '55555555555555',
  '66666666666666',
  '77777777777777',
  '88888888888888',
  '99999999999999',
];

const STRICT_STRIP_REGEX = new RegExp(/[-\\/.]/g);
const LOOSE_STRIP_REGEX = new RegExp(/[^\d]/g);

function verifierDigit(digits) {
  let index = 2;
  const reverse = digits.split('').reduce((buffer, number) => [parseInt(number, 10)].concat(buffer), []);

  const sum = reverse.reduce((buffer, number) => {
    buffer += number * index;
    index = (index === 9 ? 2 : index + 1);
    return buffer;
  }, 0);

  const mod = sum % 11;
  return (mod < 2 ? 0 : 11 - mod);
}

function strip(number, strict) {
  const regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
  return (number || '').replace(regex, '');
}

function validateCnpj(number, strict) {
  const stripped = strip(number, strict);

  if (!stripped || stripped.length !== 14 || BLACKLIST.includes(stripped)) {
    return false;
  }

  let numbers = stripped.substr(0, 12);
  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);

  return numbers.substr(-2) === stripped.substr(-2);
}

export default function isCnpj(str) {
  assertString(str);
  return validateCnpj(str);
}
