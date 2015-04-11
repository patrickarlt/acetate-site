---
title: Layouts
topic: Pages
order: 20
---

Acetate wraps Nunjucks [template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) in a simple layout system.

An example layout file.

<code class="filename">src/_layout.html</code>

```html
{% raw %}<!DOCTYPE html>
<html>
<head>
  <title>{{title}}</title>
</head>
<body>
  {% block page %}{% endblock %}
</body>
</html>{% endraw %}
```

Now that you have a layout you declare it in a page's frontmatter with the `layout` key. Format the value like `path/to/layout:block_name_in_layout`.

<code class="filename">src/index.html</code>

```html
---
title: Using Layouts
layout: _layout:page
---

<h1>I'm using a layout!</h1>
```

You can also declare layouts for large amounts of pages in your config file with the `layout` helper.

<code class="filename">acetate.conf.js</code>

```js
acetate.layout('**.*', '_layout:page');
```

The first argument is a glob that will be used to match pages. The second is the `layout` key you want to apply.

## Nesting Layouts

<code class="filename">src/_nested.html</code>

```html
{% raw %}{% extends "_layout" %}

{% block page %}
  <h1>{{title}}</h1>
  <p>This content will appear on every page using the _nested layout.</p>

  {% block content%}{% endblock %}
{% endblock %}{% endraw %}
```

To nest layouts use `extends` to declare the layout you would like to extend and then declare content for one or more of its blocks. Then declare a new block (with a differnet name) that other templates can extend.

<code class="filename">src/nested.html</code>

```html
---
title: Using Layouts
layout: _nested:content
---

<p>Look I'm using a nested layout!</p>
```
