mimosa-vulcanize
================

## Overview

This module uses Polymer's [vulcanize](https://github.com/polymer/vulcanize)
build tool to concatenate web components into a single file during Mimosa's optimization process.

For more information regarding Mimosa, see http://mimosa.io.

## Usage

Add `'vulcanize'` to the list of modules in your project's `mimosa-config.js` file.
That's all! Mimosa will install the module for you when you start `mimosa watch` or `mimosa build`.

## Functionality

This module will run `vulcanize` as part of Mimosa's optimized build
(`mimosa watch -o` or `mimosa build -o`).

By default, `mimosa-vulcanize` looks for a file named `components.html` at
the top level of your app's source directory (`watch.sourceDir`). It then
passes that file to `vulcanize`, which takes care of replacing all HTML
imports with the contents of the referenced web components. The result
of this vulcanization process is written to a file of the same name,
`components.html`, within the app's compiled directory (`watch.compiledDir`).

For details on how `vulcanize` works, check out the project's [documentation](https://github.com/Polymer/vulcanize/blob/master/README.md).

## Default Config

```javascript
vulcanize: {
  filename: 'components.html',
  strip: true,
  inline: true,
  csp: true
}
```

* `filename`: The name of the HTML file to feed to vulcanize, relative
  to `watch.sourceDir`.
* `strip`: If `true`, all whitespace and comments will be removed from the vulcanized file.
* `inline`: If `true`, all web component assets (scripts and css) will be inlined in the vulcanized file.
* `csp`: Whether to extract all inline scripts to a separate file of the
  same name (`components.js`). If both `inline` and `csp` are enabled,
  all javascript (inline and external) will be pulled into a separate JS
  file, leaving only markup and style inside `components.html`.
