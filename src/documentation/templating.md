---
title: Templating
topic: Pages
order: 10
---

Acetate uses the [Nunjucks](https://mozilla.github.io/nunjucks/) templating language for all its templating. Nunjucks is powerful and has all the features you would want to build a complex website.

## Basic Nunjucks 

In general you should refer to the [Nunjucks templating documentation](https://mozilla.github.io/nunjucks/templating.html) but a quick introduction to the basics will be helpful.

### Printing Variables

You can print a variable in Nunjucks by wrapping it in double curly braces like `{% raw %}{{ variable }}{% endraw %}`.

Unlike other templating libraries Nunjucks does not autoescape content by default. But you can use the `escape` filter`{% raw %}{{ variable | escape }}{% endraw %}`.

If you need to render Nunjucks syntax You can use a `raw` tag. See the [Nunjucks documentation](https://mozilla.github.io/nunjucks/templating.html#raw) for details.

### Iterating Over Arrays

You can use Nunjucks `{% raw %}{% for %}{% endraw %}` tag to iterate over Arrays.

<code class="filename">src/iterating-arrays.html</code>

```html
{% raw %}---
items: 
  - title: Foo
    id: 1
  - title: Bar
    id: 2
---

<ul>
{% for item in items %}
  <li>{{ item.title }}</li>
{% endfor %}
</ul>{% endraw %}
```

### Iterating Over Objects

You can use Nunjucks `{% raw %}{% for %}{% endraw %}` tag to iterate over Objects.

<code class="filename">src/Iterating-objects.html</code>

```html
{% raw %}---
dogs:
  Spot: Lab
  Rover: Corgi
---

{% for name, breed in dogs %}
  {{ name }} is a {{ breed }}
{% endfor %}{% endraw %}
```

### Conditionals

You can use Nunjucks `{% raw %}{% if %}{% endraw %}` tag to create conditional statements.

<code class="filename">src/conditionals.html</code>

```html
{% raw %}{% if src == 'index.html' %}
  On the home page.
{% elif src == 'about.html' %}
  On the about page.
{% else %}
  On some other page.
{% endif %}{% endraw %}
```

### Expressions

You can use most JavaScript literals like Strings, Numbers, Arrays, Objects, Regular Expression and functions via [Nunjucks expressions](https://mozilla.github.io/nunjucks/templating.html#expressions)

### Layouts

You can use either the [Acetate layout system](/documentation/layouts) or [Nunjucks template inheritence](https://mozilla.github.io/nunjucks/templating.html#template-inheritance)  to create reuseable layouts to wrap your content.

### Partials

Acetate leverages the [Nunjucks include tag](https://mozilla.github.io/nunjucks/templating.html#include) to create partials that can be used across multiple pages. To learn how to use partials in Acetate refer to the [partials documentation](/documentation/partials/). 

### Helpers

In addition to having access to everything in the [Nunjucks templating language](https://mozilla.github.io/nunjucks/templating.html#include) you can also [access built in variables provided by Acetate](/documetation/built-in-helpers/) and [create custom helpers](/documentation/custom-helpers/) to use in your template.

### Filters

To use a filter add it after a variable seperated by a `|` character `{% raw %}{{variable | filter}}{% endraw %}`.

You can use any of the [Nunjucks filters](https://mozilla.github.io/nunjucks/templating.html#builtin-filters) like `sort`, `first`, and `trim` and you can [define your own filters](/documentation/cusotm-helpers/).
