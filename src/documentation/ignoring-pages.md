---
title: Ignoring Pages
topic: Configuration
order: 30
---

By default, Acetate will build all pages with use the extensions `.md`, `.markdown`, and `.html`. To ignore pages, you can either prefix them with an underscore (like `_about.html`) or use the `acetate.ignore()` method in `acetate.conf.js`. The `ignore` method should be called with a string representing the path (or glob pattern) to the file you'd like to ignore:

```js
module.exports = function (acetate) {
  acetate.ignore('ignore.html');
  acetate.ignore('ignored/**/*');
};
```
