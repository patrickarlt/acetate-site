---
title: Loading Pages
topic: Basic
order: 30
---

Acetate does not load any pages by default. Generally it is a good idea to load all HTML and Markdown files in your source folder.

<code class="filename">acetate.config.js</code>

```js
module.exports = function (acetate) {
  acetate.load('**/*.+(html|md)');
};
```

Once page are loaded they can be processed, manipulated and ultimatly built to disk or served by Acetate's build in server.

## Ignoring Pages

By default, Acetate will build all pages with use the extensions `.md`, `.markdown`, and `.html`. To ignore pages, you can either prefix them with an underscore (like `_about.html`) or use the `acetate.ignore()` method in `acetate.conf.js`. The `ignore` method should be called with a string representing the path (or glob pattern) to the file you'd like to ignore:

<code class="filename">acetate.config.js</code>

```js
module.exports = function (acetate) {
  acetate.ignore('ignore.html');
  acetate.ignore('ignored/**/*');
};
```
