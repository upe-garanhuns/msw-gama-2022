import assertString from './util/assertString';

let charsetRegex = /^[a-z0-9]+(?:[-_][a-z0-9]+)*$/i;

export default function isSlug(str) {
  assertString(str);
  return (charsetRegex.test(str));
}
