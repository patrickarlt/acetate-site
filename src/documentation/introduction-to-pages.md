---
title: Introduction to Pages
navTitle: Introduction
topic: Pages
order: 1
---

Any files ending in `.md`, `.markdown` and `.html` in your `src` folder are automatically loaded by Acetate and turned into pages. When your site is built Acetate processes these pages, runs your extensions and then builds the resulting output.

Pages whose filenames begin with `_` are ignored from builds but can be used as layouts or partials.

If you have other pages that don't end in `.md`, `.markdown` and `.html` that you want Acetate to process you can use the `acetate.source` helper in you configuration files.

<code class="filename">acetate.conf.js</code>

```js
acetate.source('CNAME');
acetate.source('sitemap.xml');
acetate.source('robots.txt');
```

This would make `src/CNAME`, `src/sitemap.xml`, and `src/robots.txt` pages that you can then template with Nunjucks and use all of Acetate's features inside.

### Pretty URLs

By default, Acetate will create directory indexes for all pages. For example, the file `about.html` will be built as `about/index.html`. This enables you to use URLs in your project like `/about/`, which is more user-friendly as it doesn't force the user to remember an extension.

If you need to disable pretty URLs for a particular page you can set `prettyUrl` to `false` in the page's [front-matter](./page-metadata/). You can also set this with the [metadata helper](./altering-metadata/) in the [configuration file](./introduction-to-configuration/).
