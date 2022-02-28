[![The Internet Folks Logo](https://theinternetfolks.com/assets/images/logo.png)](https://theinternetfolks.com)

# Mate

Library for most frequent helper methods for Javascript.

[![GitHub license](https://img.shields.io/github/license/theinternetfolks/context.svg)](https://github.com/theinternetfolks/context/blob/master/LICENSE)
[![Maintainer](https://img.shields.io/badge/maintainer-monkfromearth-green)](https://github.com/monkfromearth)
[![Downloads](https://img.shields.io/npm/dm/@theinternetfolks/mate)](https://www.npmjs.com/package/@theinternetfolks/mate)

## Installation

Install with npm

```bash
  npm install @theinternetfolks/mate
```

Install with yarn

```bash
  yarn add @theinternetfolks/mate
```

## Usage/Examples

**Format String**

You can use it to replace template variables in a string, without the use of Javascript's template literals.

By default the separtor is `{}`.

```javascript
Mate.format("Hello {name}", { name: "Dolores" });
// "Hello Dolores"
```

You could pass the separator, and it would determine it.

```javascript
Mate.format("Hello {{name}}", { name: "Dolores" }, "{{}}");
// "Hello Dolores"
```

You can even pass numbers in, for formatting.

```javascript
Mate.format(
  "Hi, my name is {name} and I am {age} years old.",
  { name: "Dolores", age: 24000 },
  "{}"
);
("Hi, my name is Dolores and I am 24000 years old.");
```

You can even pass strings containing some special characters.

```javascript
Mate.format(
  "Hi, my name is {details.name}.",
  { "details.name": "Dolores" }
);
("Hi, my name is Dolores.");
```

You could explicitly pass the start and end separator, if you're creative.

```javascript
Mate.format("Hi, my name is {##name}}.", { name: "Dolores" }, "{##", "}}");
("Hi, my name is Dolores.");
```

```javascript
Mate.format("Hi, my name is {#name#}.", { name: "Dolores" }, "{#", "#}");
("Hi, my name is Dolores.");
```

**To Case**

```javascript
const { Mate } = require("@theinternetfolks/mate");

Mate.toCamel("the_internet_folks");     // "theInternetFolks"
Mate.toCapital("the internet folks");   // "The Internet Folks"
Mate.toConstant("theInternetFolks");    // "THE_INTERNET_FOLKS"
Mate.toDot("theInternetFolks");         // "the.internet.folks"
Mate.toInverse("thE inTerNEt fOLks");   // "THe INtERneT FolKS"
Mate.toLower("theInternetFolks");       // "the internet folks"
Mate.toPascal("the.internet.folks");    // "TheInternetFolks"
Mate.toSentence("THE INTERNET FOLKS."); // "The internet folks."
Mate.toSlug("theInternetFolks");        // "the-internet-folks"
Mate.toSnake("theInternetFolks");       // "the_internet_folks"
Mate.toSpace("the.internet.folks");     // "the internet folks"
Mate.toTitle("the internet folks");     // "The Internet Folks"
Mate.toUpper("theInternetFolks");       // "THE INTERNET FOLKS"
```

[Test Coverage](https://theinternetfolks.github.io/mate/coverage/)

## Support

For support, email hi [at] theinternetfolks.com.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Thanks to [to-case](https://www.npmjs.com/package/to-case) for providing a necessary starting point for this repo.

## More from The Internet Folks

#### Context

Library to help you create a context that can be used to reference data, without prop drilling, in Node-based environments.

https://www.npmjs.com/package/@theinternetfolks/context
