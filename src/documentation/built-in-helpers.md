---
title: Built in Helpers
topic: Basic
order: 50
---

## Page Variables

Acetate provides the following variables you can use any of these variables in your templates.

| Variable | Description | Example |
| --- | ----------- | ------------- |
| `stats` | File statistics for this pages template. | [Node fs.Stats](https://nodejs.org/api/fs.html#fs_class_fs_stats) Will be `false` if this page was not generated from a template.
| `src` | Path to this file from the source folder | `'blog/posts/hello-world.md'`
| `dest` | Output path for this file relative to the output folder | `'blog/posts/hello-world/index.html'`
| `url` | URL for this page. | `'blog/posts/hello-world/'`
| `templatepath` | Full path to this template from root. This will differ between platforms. | `'/Users/joe/blog/posts/hello-world/index.html'`
| `relativePath` | Relative path back to root from this page. | `../../`

### Examples

```html
<!-- last modified: {% raw %}{{ stats.mtime }}{% endraw %} -->
<!-- template: {% raw %}{{ src }}{% endraw %} -->
```

```html
<a href="{% raw %}{{ relativePath }}{% endraw %}">Home</a>
```

## Link Helper

Acetate's `{% raw %}{% link %}{% endraw %}` helper has a number of useful features to speed up development.

* Automatically resolve relative links relative to the current page.
* Automatically add an `is_active` class when the link is active.

```html
{% raw %}<!-- basic link -->
{% link '/', 'Home' %}

<!-- you can pass any additional HTML attributes you need -->
{% link '/', 'Home', 'data-foo'='Foo', target='_blank' %}
{% link '/', 'Home', id="logo", class="nav-link" %}

<!-- relative links will be resolved against the current pages URL -->
{% link '../', 'Back' %}
{% link '../', 'Back', class="back-link" %}

<!-- Use `activeClass` to customize the class that gets added if this link is active -->
{% link '../', 'Back', activeClass="active" %}

<!-- Use `requireExactMatch` if the active class should be applied only if this page url matches the URL exactly -->
{% link '/', 'Home', requireExactMatch=true %}

<!-- You can use link for external links too -->
{% link 'http://example.com', 'Example', class="external-link" %}
{% link '//example.com', 'Example' %}{% endraw %}
```

## Highlight Helper

Acetate provides a `highlight` helper that will use [highlight.js](https://highlightjs.org/) to syntax highlight blocks of code.

```html
{% raw %}{% highlight 'js'%}
let message = "Acetate is awesome!";
alert(message);
{% endhighlight %}{% endraw %}
```

You can also omit the language hint to auto detect the language or pass `text` or `plain` to disable highlighting.

```html
{% raw %}{% highlight %}
var message = "Acetate is awesome!";
alert(message)
{% endhighlight %}{% endraw %}
```

You can use one of [highlight.js's stylesheets](https://github.com/isagalaev/highlight.js/tree/master/src/styles) to style the resulting code block.

## Markdown Helper

You can also render Markdown inside a page template with the `markdown` block.

```html
{% raw %}{% markdown %}
# Acetate is awesome

Markdown is awesome too.
{% endmarkdown %}{% endraw %}
```
