import escapeRegex from "../libraries/escape-regexp-component";

/**
 * Formats a string with the given replacements.
 * @param {string} start - the start of the separator string or the entire separator string
 * @param {string} [end] - the start of the separator
 * @example
```
formatString("Hello {{name}}", { name:"Sameer" }, "{{}}")
> Hello Sameer
```
 * @example
```
formatString("Hi, my name is {name} and I am {age} years old.", { name: "Gandalf", age: 24000 }, "{}")
> Hi, my name is Gandalf and I am 24000 years old.
```
 * @example
```
formatString("Hi, my name is {#name#} and I am {#age#} years old.", { name: "Gandalf", age: 24000 }, "{#", "#}")
> Hi, my name is Gandalf and I am 24000 years old.
```
 * @example
```
formatString("Hi, my name is {#name#} and I am {#age#} years old.", { name: "Gandalf", age: 24000 }, "{##}")
> Hi, my name is Gandalf and I am 24000 years old.
```
 * @returns
 */
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
  if (!start) return text;

  if (typeof end === "undefined") {
    end = start.substring(start.length / 2);
    start = start.substring(0, start.length / 2);
  }

  if (start === end) return text;

  const startRegex = escapeRegex(start);
  const endRegex = escapeRegex(end);

  for (const arg in replacements) {
    text = text.replace(
      new RegExp(startRegex + arg + endRegex, "gi"),
      replacements[arg].toString()
    );
  }

  return text;
}

export default formatString;
