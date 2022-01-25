[![The Internet Folks Logo](https://theinternetfolks.com/assets/images/logo.png)](https://theinternetfolks.com)

# Mate

Library for most frequent helper methods for Javascript.

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

You could pass the separator, and it would determine it.

```javascript
Mate.format("Hello {{name}}", { name:"Sameer" }, "{{}}")
> Hello Sameer
```

You can even pass numbers in, for formatting.

```javascript
Mate.format("Hi, my name is {name} and I am {age} years old.", { name: "Gandalf", age: 24000 }, "{}")
> Hi, my name is Gandalf and I am 24000 years old.
```

You could explicitly pass the start and end separator, if you're creative.

```
Mate.format("Hi, my name is {##name}}.", { name: "Gandalf" }, "{##", "}}")
> Hi, my name is Gandalf.
```

```
Mate.format("Hi, my name is {#name#}.", { name: "Gandalf" }, "{#", "#}")
> Hi, my name is Gandalf.
```

**To Case**

```javascript
const { Mate } = require("@theinternetfolks/mate");

Mate.toCamel("the_internet_folks");         // "theInternetFolks"
Mate.toCapital("the internet folks");       // "The Internet Folks"
Mate.toConstant("theInternetFolks");        // "THE_INTERNET_FOLKS"
Mate.toDot("theInternetFolks");             // "the.internet.folks"
Mate.toInverse("thE inTerNEt fOLks");       // "THe INtERneT FolKS"
Mate.toLower("theInternetFolks");           // "the internet folks"
Mate.toPascal("the.internet.folks");        // "TheInternetFolks"
Mate.toSentence("THE INTERNET FOLKS.");     // "The internet folks."
Mate.toSlug("theInternetFolks");            // "the-internet-folks"
Mate.toSnake("theInternetFolks");           // "the_internet_folks"
Mate.toSpace("the.internet.folks");         // "the internet folks"
Mate.toTitle("the internet folks");         // "The Internet Folks"
Mate.toUpper("theInternetFolks");           // "THE INTERNET FOLKS"
```

[Test Coverage](https://theinternetfolks.github.io/mate/coverage/)

## Support

For support, email hi [at] theinternetfolks.com.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Thanks to [to-case](https://www.npmjs.com/package/to-case) for providing a necessary starting point for this repo.
