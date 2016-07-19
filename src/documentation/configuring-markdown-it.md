---
title: Configuring Markdown It
topic: Advanced
order: 100
---

You can access the internal instance of [MarkdownIt](https://github.com/MoOx/markdown-it-toc-and-anchor) at `acetate.renderer.markdown` in your configuration file. This means you can easily use MarkdownIt plugins](https://www.npmjs.com/package/markdown-it-toc-and-anchor) by simply registering them in your configuration file.

<code class="filename">acetate.config.js</code>

```js
const markdownItTocAndAnchor = require('markdown-it-toc-and-anchor').default;

module.exports = function (acetate) {
  acetate.renderer.markdown.use(markdownItTocAndAnchor);
}
```

You can also replace the MarkdownIt instance entirely by making a new instance and assigning it to `acetate.renderer.markdown`.

<code class="filename">acetate.config.js</code>

```js
module.exports = function (acetate) {
  acetate.renderer.markdown = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true
    });
  }
}
```
