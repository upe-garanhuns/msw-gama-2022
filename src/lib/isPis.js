/* eslint-disable eqeqeq */
import assertString from './util/assertString';

const PIS_WEIGHTS = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

function validatePis(pis) {
  pis = String(pis).replace(/[^\d]/igm, '');

  let sum = 0;
  let digit = 0;

  if (pis.length !== 11 || pis.match(/\D/)) {
    return false;
  }

  pis = pis.split('');

  for (let i = 0; i < 10; i++) {
    sum += PIS_WEIGHTS[i] * pis[i];
  }

  digit = 11 - (sum % 11);
  digit = digit < 10 ? digit : 0;

  return pis[10] == digit;
}

export default function isPis(str) {
  assertString(str);
  return validatePis(str);
}
