import toCamel from "./to-case/to-camel-case";
import toCapital from "./to-case/to-capital-case";
import toConstant from "./to-case/to-constant-case";
import toDot from "./to-case/to-dot-case";
import toInverse from "./to-case/to-invert-case";
import toLower from "./to-case/to-lower-case";
import toNone from "./to-case/to-no-case";
import toPascal from "./to-case/to-pascal-case";
import toSentence from "./to-case/to-sentence-case";
import toSlug from "./to-case/to-slug-case";
import toSnake from "./to-case/to-snake-case";
import toSpace from "./to-case/to-space-case";
import toTitle from "./to-case/to-title-case";
import toUpper from "./to-case/to-upper-case";
import getCase from "./to-case/get-case";

import formatString from "./format-string";

export const Mate = {
  toCamel,
  toCapital,
  toConstant,
  toDot,
  toInverse,
  toLower,
  toNone,
  toPascal,
  toSentence,
  toSlug,
  toSnake,
  toSpace,
  toTitle,
  toUpper,
  getCase,
  format: formatString,
};
