import { expect } from "chai";
import to from "../../src/to-case";

describe("index", () => {
  it("should be defined functions", () => {
    const names = Object.keys(to);

    for (const name of names) {
      expect(to[name]).to.be.not.undefined;
      expect(to[name]).to.be.a("function");
    }
  });
});
