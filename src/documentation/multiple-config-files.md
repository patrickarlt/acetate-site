---
title: Multiple Config Files
topic: Advanced
order: 50
---

As your Acetate installation grows in complexity you can simplify by separating your configuration into multupile files with the `acetate.require` helper.

<code class="filename">acetate.config.js</code>

```js
module.exports = function (acetate) {
  acetate.require('./external.config.js');
}
```

<code class="filename">external.config.js</code>

```js
module.exports = function (acetate) {
  // do additional configuration here
}
```

You can also require additional configurations directly from npm.

```js
module.exports = function (acetate) {
  // would require the `common-acetate-helpers` module from NPM.
  acetate.require('common-acetate-helpers');
}
```

`acetate.require` will also listen for changes in external configuration helpers and reload itself when in [server mode](../server/) or [watch mode](../watcher/).
