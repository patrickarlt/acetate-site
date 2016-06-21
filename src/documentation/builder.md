---
title: Builder
topic: Modes
order: 30
---


The build mode simply builds all files to the output directory. THe builder will not build any pages that have their `ignore` metadata key set to true.

*Module:* `acetate/lib/modes/builder`;

```js
var Acetate = require('acetate');
var builder = require('acetate/lib/modes/builder');

var aceate = new Acetate({
  // options
});

builder(acetate).then(function () {
  console.log("Success");
});
```
