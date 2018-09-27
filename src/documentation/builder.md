---
title: Builder
topic: Modes
order: 30
---

The build mode builds all files to the output directory. The builder will not build any pages that have an `ignore` metadata key set to true.

*Module:* `acetate/lib/modes/builder`;

```js
var Acetate = require('acetate');
var builder = require('acetate/lib/modes/builder');

var aceate = new Acetate({
  // ignore: true
});

builder(acetate).then(function () {
  console.log("Success");
});
```
