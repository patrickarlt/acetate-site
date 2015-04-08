---
title: Partials
---

You can use build and include reusable templates accross multupile pages with Nunjucks `include` tag. Remember filenames that begin with `_` are not built so they are ideal for partials.

<code class="filename">src/_partial.html</code>

```html
{% raw %}<title>{{title}}</title>
<meta name="description" content="{{description}}">{% endraw %}
```

Now that we have defined a tempalte file we can inclucde it accross multupile pages with `{% raw %}{% include '_partial' %}{% endraw %}`. Like with layouts you dont have to include the file extension and the path is relative to your source folder.

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

