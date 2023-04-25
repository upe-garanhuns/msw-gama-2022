import assertString from './util/assertString';

const STRICT_STRIP_REGEX = new RegExp(/[.-]/g);
const LOOSE_STRIP_REGEX = new RegExp(/[^\d]/g);
const BLACKLIST = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
  '12345678909',
];

const verifierDigit = (digits) => {
  const numbers = digits
    .split('')
    .map(number => parseInt(number, 10));

  const modulus = numbers.length + 1;
  const multiplied = numbers.map((number, index) => number * (modulus - index));
  const mod = multiplied.reduce((buffer, number) => buffer + number) % 11;

  return (mod < 2 ? 0 : 11 - mod);
};

function strip(number, strict) {
  const regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
  return (number || '').replace(regex, '');
}

function validateCpf(number, strict) {
  const stripped = strip(number, strict);

  if (!stripped) {
    return false;
  }

  if (stripped.length !== 11) {
    return false;
  }

  if (BLACKLIST.includes(stripped)) {
    return false;
  }

  let numbers = stripped.substr(0, 9);
  numbers += verifierDigit(numbers);
  numbers += verifierDigit(numbers);

  return numbers.substr(-2) === stripped.substr(-2);
}

export default function isCpf(str, strict) {
  assertString(str);
  return validateCpf(str, strict);
}
