import { assert } from "chai";
import slug from "../../src/to-case/to-slug-case";

/**
 * Cases.
 */

var strings = {
  camel: "thisIsAString",
  constant: "THIS_IS_A_STRING",
  dot: "this.is.a.string",
  pascal: "ThisIsAString",
  sentence: "This is a string.",
  snake: "this_is_a_string",
  space: "this is a string",
  title: "This Is a String",
  junk: "-this__is$%a-string...",
};

/**
 * Tests.
 */

describe("to-slug-case", function () {
  for (var key in strings) test(key);
});

/**
 * Create a test for a given case `key`.
 *
 * @param {String} key
 */

function test(key) {
  it("should convert " + key + " case", function () {
    assert.equal(slug(strings[key]), "this-is-a-string");
  });
}
