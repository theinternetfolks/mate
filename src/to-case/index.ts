import cases from "./cases";
import determineCase from "./determine-case";

const to = {
  ...cases,
  case: determineCase,
};

export default to;
