---
title: Watcher
topic: Modes
order: 20
---

Watch mode builds the entire site once when started and will rebuild pages when they change. If you add or edit a file the begins with a `_` (used to denote a layout or partial) the watcher will rebuild all pages in your site.

Any pages you ignore while running the watcher will still build but with a warning. Due to this limitation it is preferable to use the [Acetate server](/documentation/server) in development.

*Module:* `acetate/lib/modes/watcher`;

```js
var Acetate = require('acetate');
var watch = require('acetate/lib/modes/watcher');

var aceate = new Acetate({
  // options
});

var watcher = watch(acetate);

// call watcher.stop() to stop watching files.
```
