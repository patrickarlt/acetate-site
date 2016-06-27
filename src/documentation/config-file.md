---
title: Config File
topic: Basic
order: 20
---

Acetate is configured using a file called `acetate.config.js`. The configuration file should just be a Node module that will be called with the instance of Acetate. Here is a minimal example of an Acetate configuration file that simply sets the default layout and adds a few files that are usually ignored by Acetate:

<code class="filename">acetate.config.js</code>

```js
module.exports = function (acetate) {
  // load all html and markdown files from our source folder
  acetate.load('**/*.+(html|md)');

  // define a default layout to use on all pages
  acetate.layout('**/*', 'layouts/_layout:main');

  // load the CNAME file
  acetate.load('CNAME');

  // dont layout hte CNAME file
  acetate.layout('CNAME', false);
};
```

Below is a summary of the other configuration options possible via the `acetate.config.js` file.

| Method | Description | Phase | Link
| --- | --- | --- | --- |
| `load('pattern')` | Loads files from the source directory that match `pattern` | Load | [Creating Pages](/documentation/creating-pages) |
| `layout('pattern', 'layout')` | Defines a `layout` for all pages whose source matches `pattern`. | Transform | [Layouts and Partials](/documentation/layouts-and-partials/) |
| `data('name', 'path')` | Loads a JSON or YAML file and makes its contents available to pages. | Transform | [External Data](/documentation/external-data/) |
| `data('name', handler)` | Define a `handler` function to load data from an external source. | Transform | [External Data](/documentation/external-data/) |
| `ignore('pattern')` | Ignore all pages matching `pattern` from the build. | Transform | [Creating Pages](/documentation/creating-pages) |
| `metadata('pattern', metadata)` | Merge a `metadata` object into all pages matching `pattern`. | Transform | [Page Metadata](/documentation/page-metadata/) |
| `query('name', filter, map, reduce, inital)` | Define a map/reduce query across a filtered set of pages. | Transform | [Querying Pages](/documentation/querying-pages/) |
| `generate(handler)` | Define a handler function to dymanically create new pages. | Transform | [Generating Pages](/documentation/generating-pages/) |
| `transform('pattern', handler)` | Manipulate all pages matching `pattern`. | Transform | [Transforming Pages](/documentation/pages/) |
| `transformAsync('pattern', handler)` | Manipulate all pages matching `pattern` with an async function. | Transform | [Transforming Pages](/documentation/pages/) |
| `transformAll(handler)` | Bulk manipulate all pages. | Transform | [Transforming Pages](/documentation/pages/) |
| `transformAllAsync(handler)` | Bulk manipulate all pages with an async function. | Transform | [Transforming Pages](/documentation/pages/) |
| `prerender('pattern', handler)` | Run a async function against a page before rendering. | Render | [Prerender Functions](/documentation/prerender-functions) |
| `helper('name', handler, options)` | Define a custom helper function. | Configure | [Custom Helpers](/documentation/custom-helpers)
| `block('name', handler, options)` | Define a custom block helper function. | Configure | [Custom Helpers](/documentation/custom-helpers)
| `filter('name', handler)` | Define a custom filter function. | Configure | [Custom Helpers](/documentation/custom-helpers)
| `global('name', value)` | Define a global variable that can be used in pages. | Configure | |
| `require('moduleIdentifier')` | Require another configuration file. | Configure | [Multiple Config Files](/documentation/multiple-config-files/) |
| `use(plugin)` | Execute another Acetate configuration function. | Configure | [Creating Plugins](/documentation/creating-plugins/) |
| `debug(message)` | Print a debug message. Your message and all arguments will be passed to [`util.format`](https://nodejs.org/api/util.html#util_util_format_format)
| `info(message)` | Print a info message. Your message and all arguments will be passed to [`util.format`](https://nodejs.org/api/util.html#util_util_format_format)
| `success(message)` | Print a success message. Your message and all arguments will be passed to [`util.format`](https://nodejs.org/api/util.html#util_util_format_format)
| `warn(message)` | Print a warning message. Your message and all arguments will be passed to [`util.format`](https://nodejs.org/api/util.html#util_util_format_format)
| `error(message)` | Print an error message. Your message and all arguments will be passed to [`util.format`](https://nodejs.org/api/util.html#util_util_format_format)
| `time(label)` | Starting timing a particular operation. | |
| `timeEnd(label)` | Stop timing a particular operation. Return a string duration for use in a log message. | |
