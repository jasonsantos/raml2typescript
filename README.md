# raml2typescript

[![Prettier](https://img.shields.io/badge/code%20style-prettier-blue.svg?style=flat)](https://github.com/prettier/prettier)

A simple but very opinionated RAML to Typescript type generator.

### RAML version support

raml2typescript only support RAML 1.0 files.

## Description

This tool main purpose is to generate Typescript type definitions based on RAML
types and enums.

It will ignore endpoints -- except for organizing the output.

## Install

```
npm i -g raml2typescript
```

## Usage

```
raml2typescript --help
raml2typescript example.schema.raml > example.d.ts
raml2typescript --recursive *.schema.raml > alltypes.d.ts
raml2typescript --recursive ../docs/**/*.schema.raml --output-dir src/modules/{}/
```

## Acknowledgements

raml2typescript is heavily based on raml2html, an excellent customizeable
documentation generator.

You can find raml2html at [GitHub](https://github.com/raml2html/raml2html)

## Contributing

raml2typescript is an open source project and your contribution is very much
appreciated.

## Changelog

See
[changelog.md](https://github.com/raml2typescript/raml2typescript/blob/master/changelog.md)

## License

raml2typescript is available under the MIT license. See the LICENSE file for
more info.
