import { expect } from "chai";
import formatString from "../../src/format-string";

describe("formatString", () => {
  it("should use start and end for formatting", () => {
    const sentence = "Hi, my name is {{name}} and I am {{age}} years old.";
    const replacements = {
      name: "John",
      age: "25",
    };
    const start = "{{";
    const end = "}}";
    const expected = "Hi, my name is John and I am 25 years old.";
    const actual = formatString(sentence, replacements, start, end);
    expect(actual).to.be.eq(expected);
  });

  it("should use seperator for formatting", () => {
    const sentence = "Hi, my name is {{name}} and I am {{age}} years old.";
    const replacements = {
      name: "John",
      age: 25,
    };
    const expected = "Hi, my name is John and I am 25 years old.";
    const actual = formatString(sentence, replacements, "{{}}");
    expect(actual).to.be.eq(expected);
  });

  it("should use start and end for formatting", () => {
    const sentence = "Hi, my name is {#name#} and I am {#age#} years old.";
    const replacements = {
      name: "John",
      age: 25,
    };
    const expected = "Hi, my name is John and I am 25 years old.";
    const actual = formatString(sentence, replacements, "{#", "#}");
    expect(actual).to.be.eq(expected);
  });

  it("should use seperator for formatting", () => {
    const sentence = "Hi, my name is {#name#} and I am {#age#} years old.";
    const replacements = {
      name: "John",
      age: 25,
    };
    const expected = "Hi, my name is John and I am 25 years old.";
    const actual = formatString(sentence, replacements, "{##}");
    expect(actual).to.be.eq(expected);
  });

  it("should use seperator for formatting", () => {
    const sentence = "Hi, my name is {# name #} and I am {# age #} years old.";
    const replacements = {
      name: "John",
      age: 25,
    };
    const expected = "Hi, my name is John and I am 25 years old.";
    const actual = formatString(sentence, replacements, "{#  #}");
    expect(actual).to.be.eq(expected);
  });

  it("should use seperator for formatting", () => {
    const sentence = "Hi, my name is {name#} and I am {age#} years old.";
    const replacements = {
      name: "John",
      age: 25,
    };
    const expected = "Hi, my name is John and I am 25 years old.";
    const actual = formatString(sentence, replacements, "{#}");
    expect(actual).to.be.eq(expected);
  });

  it("should use different start and end for formatting", () => {
    const sentence = "Hi, my name is {##name}} and I am {##age}} years old.";
    const replacements = {
      name: "John",
      age: 25,
    };
    const expected = "Hi, my name is John and I am 25 years old.";
    const actual = formatString(sentence, replacements, "{##", "}}");
    expect(actual).to.be.eq(expected);
  });

  it("should not use same seperator for formatting", () => {
    const sentence = "Hi, my name is ||name|| and I am ||age|| years old.";
    const replacements = {
      name: "John",
      age: "25",
    };
    const actual = formatString(sentence, replacements, "||||");
    expect(actual).to.be.eq(sentence);
  });
});
