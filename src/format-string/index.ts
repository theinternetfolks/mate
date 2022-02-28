import escapeRegex from "../libraries/escape-regexp-component";

/**
 * Formats a string with the given replacements.
 * @param {string} start - the start of the separator string or the entire separator string
 * @param {string} [end] - the start of the separator
 * @example
```
formatString("Hello {name}", { name:"Dolores" })
> Hello Dolores
```
```
formatString("Hello {{name}}", { name:"Dolores" }, "{{}}")
> Hello Sameer
```
 * @example
```
formatString("Hi, my name is {name} and I am {age} years old.", { name: "Dolores", age: 24000 }, "{}")
> Hi, my name is Dolores and I am 24000 years old.
```
 * @example
```
formatString("Hi, my name is {#name#} and I am {#age#} years old.", { name: "Dolores", age: 24000 }, "{#", "#}")
> Hi, my name is Dolores and I am 24000 years old.
```
 * @example
```
formatString("Hi, my name is {#name#} and I am {#age#} years old.", { name: "Dolores", age: 24000 }, "{##}")
> Hi, my name is Dolores and I am 24000 years old.
```
 * @returns
 */
function formatString(
  text: string,
  replacements: Record<string, string | number>,
  start?: string,
  end?: string
): string;
function formatString(
  text: string,
  replacements: Record<string, string | number>,
  start: string,
  end?: string
): string;
function formatString(
  text: string,
  replacements: Record<string, string | number>,
  start: string,
  end: string
): string {
  if (!start && end) end = undefined;
  if (!start) start = "{}";

  if (typeof end === "undefined") {
    end = start.substring(start.length / 2);
    start = start.substring(0, start.length / 2);
  }

  if (start === end) return text;

  if (!start.replace(/\s/g, "").length || !end.replace(/\s/g, "").length) {
    throw new Error(
      "You cannot only use whitespace as a separator. Please include a character for specifying separators better."
    );
  }

  const startRegex = escapeRegex(start);
  const endRegex = escapeRegex(end);

  for (const arg in replacements) {
    if (
      typeof replacements[arg] === "string" ||
      typeof replacements[arg] === "boolean" ||
      typeof replacements[arg] === "number"
    ) {
      text = text.replace(
        new RegExp(startRegex + arg + endRegex, "gi"),
        replacements[arg].toString()
      );
    }
  }

  return text;
}

export default formatString;
