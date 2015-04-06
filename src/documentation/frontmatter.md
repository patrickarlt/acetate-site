---
title: Frontmatter
---

All pages can declare local metadata to use in their tempaltes and configure their behavior. Acetate supports using both YAML and JSON to declare frontmatter.

```
---
title: Page with YAML metadata
---

{% raw %}<h1>{{ title }}</h1>{% endraw %}
```

```
{
  "title": "Page with JSON metadata"
}
---

{% raw %}<h1>{{ title }}</h1>{% endraw %}
```
