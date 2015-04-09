---
title: Page Metadata
topic: Pages
---

All pages can declare local metadata (as YAML) to use in their tempaltes and configure their behavior. Anything you declare in the frontmatter is accessable as a variable in your templates.

```
---
title: Page with YAML metadata
layout: _layout:master
theme: blue
---

<h1>My Page</h1>
```

## Applying Metadata in Bulk

In your config file you can also use the `acetate.metadata` helper to apply metadata to all pages matching a glob.

<code class="filename">acetate.conf.js</code>
```js
// would match anything in the src/blog folder
acetate.metadata('blog/**/*', {
    author: 'Patrick Arlt'
});
```

Local Metadata declared on the page is always kept. So if a page aleady had `author` defined locally this would not override it.

## Using Metadata in Templates

Values in the metadata are passed directly to the local template context. See [templating](/documentation/templating) to learn the basics fo the [Nunjucks](https://mozilla.github.io/nunjucks/) templating language.

```
---
title: Page with YAML metadata
layout: _layout:master
theme: blue
---

{% raw %}<h1 class="{{theme}}">{{title}}</h1>{% endraw %}
```

## Reserved Metadata Keys

Acetate reserves the following keys for its own internal use or for you to use in your templates. You should use any of these key names for any other purpose.

### Editable

You can set or change these metadata keys to change basic Acetate behavior.

| Key | Description | Documentation |
| --- | ----------- | ------------- |
| `layout` | The layout this page uses to render. | [Page Layouts](/documentation/layouts/)
| `groups` | Groups that this page should load. | [Grouping Pages](/documentation/groups/)
| `collections` | Collections that this page should load. | [Page Collections](/documentation/collections/)
| `data` | Data that this page should load. | [External Data](/documentation/external-data)
| `ignore` | Should the page be ignored during the build? | `false` by default.

### Read Only

These metadata keys are available for you to use in your templates but are read only can cannot be changed.

| Key | Description | Documentation |
| --- | ----------- | ------------- |
| `stats` | File statistics for this pages template. | [Built-in Helpers](/documentation/built-in-helpers)
| `src` | Path to this file from the `acetate.src` folder | [Built-in Helpers](/documentation/built-in-helpers)
| `dest` | Output path for this file relative to the `acetate.dest` folder | [Built-in Helpers](/documentation/built-in-helpers)
| `url` | URL for this page. | [Built-in Helpers](/documentation/built-in-helpers)
| `fullpath` | Full path to this template from root. | [Built-in Helpers](/documentation/built-in-helpers)
| `relativePath` | Relative path back to root from this page. | [Built-in Helpers](/documentation/built-in-helpers)