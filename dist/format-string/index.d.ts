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
declare function formatString(text: string, replacements: Record<string, string | number>, start?: string, end?: string): string;
declare function formatString(text: string, replacements: Record<string, string | number>, start: string, end?: string): string;
export default formatString;
//# sourceMappingURL=index.d.ts.map