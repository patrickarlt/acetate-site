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

This would make `src/CNAME`, `src/sitemap.xml`, and `src/robots.txt` pages that you can then template with Nunjucks and use all all of Acetate's feature inside.
