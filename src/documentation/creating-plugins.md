---
title: Creating Plugins
topic: Advanced
order: 60
---

Acetate supports distributing code via npm as a plugin. For an example of a simple plugin you can look at the source code for [`acetate-asset-revisions`](https://github.com/patrickarlt/acetate-asset-revisions/blob/master/index.js)

<code class="filename">acetate.config.js</code>

```js
var assetRevisions = require('acetate-asset-revisions')

module.exports = function(acetate){
  acetate.use(assetRevisions({
    manifest: 'build/assets.json'
  }));
};
```

To use a plugin simply pass a function to `acetate.use`. That function will get the `acetate` object as its first argument and can call additional helpers. For example

<code class="filename">my-plugin.js</code>

```js
module.exports = function (options) {
  // anything you want your plugin to do one per config phase can be done here

  return function (acetate) {
    // call any configuration methods you need for your plugin
  }
};
```

<code class="filename">acetate.config.js</code>

```js
// require plugin as a module
var myPlugin = require('my-plugin');

module.exports = function(acetate){
  // call myPlugin which returns an acetate configuration function
  acetate.use(myPlugin({
    // options
  }));
};
```