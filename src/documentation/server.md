---
title: Server
topic: Modes
order: 10
---

Acetates server mode is a [Browsersync](https://www.browsersync.io/) based live reloading server with the following features:

* Live reloading of pages during editing
* In browser console and fullscreen error messages
* Page metadata appears in browser

Fast startup and rendering times even for large sites.

*Module*: `acetate/lib/modes/server`

```js
var Acetate = require('acetate');
var watch = require('acetate/lib/modes/watcher');

var aceate = new Acetate({
  // options
});

var browserSyncOptions = {}

var server = watch(acetate, browserSyncOptions);

// send a log message to browsers you can pass
//  any additional arguments you would like
server.sendLog('Hello!', );

// render a fullscreen message in the browser
server.sendFullscreenMessage('title', 'message', 'extra');

// reload all connected pages
server.reload()

// use server.stop() to stop the server
```

In general, you can pass any [Browsersync options](https://www.browsersync.io/docs/options/) to the server mode as a second argument. However, Acetate will modify any options in the following way:

* `logPrefix` will always be Acetate
* `logLevel` will always match Acetates log level
* `server` or `server.baseDir` will always be Acetate's output folder or include Acetate's output folder
* `files` will always include all files in Acetate's output folder
* `snippetOptions.async` will always be `true`
