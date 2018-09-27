---
title: Understanding Acetate
layout: layouts/_documentation:content
---

## Configure, Load, Transform, Render

Acetate sites divide the build process into 4 separate phases called Configure, Load, Transform and Render. Each of these phases runs in sequence although many processes within each phase happen asynchronously.

Refer to the [config file documentation](/documentation/config-file) for more information about which phase a method is part of.

### The Configure Phase

This is the first phase when you initially run Acetate. Your configuration file is loaded and tasks are queued for the remaining 3 phases. After your configuration file is evaluated, Acetate will setup its own built-in helpers.

### The Load Phase

During the load phase Acetate will load all pages in your source folder according to the `acetate.load('pattern')` calls in your config file. Acetate does not load any pages by default so make sure you have at lease 1 `acetate.load` call. Generally a good starting point is to load all `.html` or `.md` files:

<code class="filename">acetate.config.js</code>

```js
module.exports = function (acetate) {
  // load all html and markdown files from our source folder
  acetate.load('**/*.+(html|md)');
};
```

When running Acetate as a server or when watching file for changes Acetate will keep a cache of pages as they appear on disk and update them as you change them rather then reloading all files every time.

### The Transform Phase

After pages are loaded Acetate can now manipulate them with other configuration directives like `acetate.metadata`, `acetate.layout` and `acetate.transform`. Transformations can be sync or async, but each transformation is applied one after the other.

This makes understanding which transformation is being applied very simple. For example:

```js
module.exports = function (acetate) {
  // ...

  // add an "author" metadata value to all pages
  acetate.metadata('**/*', {
    author: 'Susan'
  });

  // override the "author" metadata on blog pages
  acetate.metadata('blog/**/*', {
    author: 'Joe'
  });

  // since function in the transformation phase run after
  // each other this will log "Susan" on all pages except
  // for the blog pages which will log "Joe"
  acetate.transform('**/*', function (page) {
    console.log(page.author);
  });

  // ...
};
```

### The Render Phase

After Acetate has transformed all the pages in the site, they are ready for rendering. Rendering a page first runs any [prerender functions](/documentation/prerender-functions/)P that apply to the page.

[Prerender functions](/documentation/prerender-functions/) are ideal for pages that require expensive async operations before the page is rendered. Prerendering functions are only run before the individual page is rendered, rather then as a part of the transformation phase which is run before *any* page is rendered.

## Modes

Acetate ships with 3 default implementations to create a website as part of a larger build process. Usage of these modes is mostly handled by other tools but you can also use them as part of a custom implementation.

* [Builder](/documentation/builder/) - Builds the site to the output folder.
* [Watcher](/documentation/watcher/) - Build the site then watch for changes and rebuild.
* [Server](/documentation/server/) - Full featured development server.
