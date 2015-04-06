---
title: Page Metadata
---

All pages can declare local metadata (as YAML) to use in their tempaltes and configure their behavior. Anything you declare in the frontmatter is accessable as a variable in your templates.

```
---
title: Page with YAML metadata
---

{% raw %}<h1>{{ title }}</h1>{% endraw %}
```