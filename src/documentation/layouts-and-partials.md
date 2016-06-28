---
title: Layouts and Partials
topic: Basic
order: 40
---

## Page Layouts

Acetate wraps Nunjucks [template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) in a simple layout system.

To create a layout template just make a new page with a `block`. Content will be inserted into this block. All block names in your project must be unique.

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

Now that you have a layout you declare it in a page's metadata with the `layout` key. Format the value like `path/to/layout:block_name_in_layout`. You can optionally omit the file extension; Acetate will search for files ending in `.html` and `.md`.

<code class="filename">src/index.html</code>

```html
{% raw %}---
title: Using Layouts
layout: _layout:page
---

<h1>I'm using a layout!</h1>{% endraw %}
```

## Specifying Layout in the Config

You can specify what layout a set of pages should use in the configuration file by using the `acetate.layout()` method. This method should be called with two arguments:

1. *pattern*: A string representing with pages should receive this layout. For example `'contact/**/*'` would add the layout to every page within the contact folder.
2. *layout*: A string specifying the path to the layout (relative to the source folder) and which block in the layout should be used.

Here is an example, which sets up a default layout, a layout for all documentation, and also specifies a particular page with should not receive a layout:

```js
module.exports = function (acetate) {
  // use the `main` block in layouts/_layout for all pages
  acetate.layout('**/*', 'layouts/_layout:main');

  // but use the `content` block in layouts/_documentation for all pages in the documentation folder
  acetate.layout('documentation/**/*', 'layouts/_documentation:content');

  // do not layout the app.html file
  acetate.layout('app.html', false);
};
```

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
{% raw %}---
title: Using Layouts
layout: _nested:content
---

<p>Look I'm using a nested layout!</p>{% endraw %}
```

## Using Nunjucks Template Inheritance

You do not have to use Acetate's layout system for all your pages. If you want to declare more then one block in a template and fill in that content from page just use [Nunjucks template inheritance](https://mozilla.github.io/nunjucks/templating.html#template-inheritance) as normal and set the `layout` metadata key to `false`.

Markdown pages cannot use template inheritance. They must use the `layout` key in their metadata.

## Partials

You can use build and include reusable templates across multiple pages with Nunjucks `include` tag. Remember filenames that begin with `_` are not built so they are ideal for partials.

<code class="filename">src/_partial.html</code>

```html
{% raw %}<title>{{title}}</title>
<meta name="description" content="{{description}}">{% endraw %}
```

Now that we have defined a template file we can include it across multiple pages with `{% raw %}{% include '_partial' %}{% endraw %}`. As with layouts, you don't have to include the file extension and the path is relative to your source folder.

<code class="filename">src/contact.html</code>

```html
---
title: Contact
description: Contact us for more information.
---

{% raw %}<!DOCTYPE html>
<html>
<head>
  {% include '_partial' %}
</head>
<body>
  <h1>Contact Us</h1>
</body>
</html>{% endraw %}
```

<code class="filename">src/about.html</code>

```html
---
title: About
description: Learn a little more about us.
---

{% raw %}<!DOCTYPE html>
<html>
<head>
  {% include '_partial' %}
</head>
<body>
  <h1>About Us</h1>
</body>
</html>{% endraw %}
```

## Macros and Imports

Acetate also allows you to use [Nunjucks import](https://mozilla.github.io/nunjucks/templating.html#import) in templates. Remember, the path will be relative to your source directory.
