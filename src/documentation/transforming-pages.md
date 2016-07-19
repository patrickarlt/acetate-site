---
title: Transforming Pages
topic: Advanced
order: 10
---

Beyond [adding or updating page metadata](/documentation/page-metadata) Acetate also provides helper functions for transforming and altering pages at a larger scale. There are 4 transformation methods.

* `transform('pattern', handler)` - transform pages matching `pattern`. `handler` get the page as the first argument and should return the page after altering it.
* `transformAsync('pattern', handler)` - transform pages matching `pattern`. `handler` gets the page as the first argument and a callback as the second. The callback should be called with error (or `null`) and the page.
* `transformAll(handler)` - `handler` gets an array of all pages as the first argument and should return the array when finished.
* `transformAllAsync(hander)` - `handler` gets an array of all pages as the first argument and a callback as the second. The callback should be called with error (or `null`) and the array of pages.

Transformers are particularly useful for manipulating or extracting data from a page's `template` property or for altering metadata like `url` or `dest` in complex ways.

# Example: Extracting Markdown Headers

```js
module.exports = function (acetate) {
  // ...

  const MARKDOWN_HEADER_REGEX = /^#{1,6}\s(.+)$/;

  acetate.transform('**/*.md', function (page) {
    if (page.title) {
      return page;
    }

    var headers = MARKDOWN_HEADER_REGEX.exec(page.template);

    if (headers && headers[1]) {
      page.title = headers[1];
    }

    return page;
  });

  // ...
};
```
