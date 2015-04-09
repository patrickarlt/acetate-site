---
title: Built-in Page Helpers
topic: Pages
---

## Page Variables

You can use any of these variables in your templates.

| Variable | Description | Example |
| --- | ----------- | ------------- |
| `stats` | File statistics for this pages template. | [Node fs.Stats](https://nodejs.org/api/fs.html#fs_class_fs_stats)
| `src` | Path to this file from the `acetate.src` folder | `'blog/posts/hello-world.md'`
| `dest` | Output path for this file relative to the `acetate.dest` folder | `'blog/posts/hello-world/index.html'`
| `url` | URL for this page. | `'blog/posts/hello-world/'`
| `fullpath` | Full path to this template from root. This will differ between platforms. | `'/Users/joe/blog/posts/hello-world/index.html'`
| `relativePath` | Relative path back to root from this page. | `../../`

### Examples

```html
<!-- last modified: {{ stats.mtime }} -->
<!-- template: {{ src }} -->
```

```html
<a href="{{relativePath}}">Home</a>
```

## Block Helpers

Acetate also provides 2 helpers you can use in your files to render Markdown and highlight code. You can use them like so.

### Highlight

```html
{% raw %}{% highlight 'js'%}
var message = "Acetate is awesome!";
alert(message)
{% endhighlight %}{% endraw %}
```

You can also omit the language hint to auto detect the language.

```html
{% raw %}{% highlight %}
var message = "Acetate is awesome!";
alert(message)
{% endhighlight %}{% endraw %}
```

You can use one of [highlight.js's stylesheets](https://github.com/isagalaev/highlight.js/tree/master/src/styles) to style the resulting code block.

### Markdown

```html
{% raw %}{% markdown %}
# Acetate is awesome

Markdown is awesome too.
{% endmarkdown %}{% endraw %}
```
