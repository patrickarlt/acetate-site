---
title: Configuring Layouts
topic: Configuration
order: 20
---

You can specify what layout a set of pages should use in the configuration file by using the `acetate.layout()` method. This method should be called with two arguments:

1. *glob*: A string representing with pages should receive this layout. For example `'contact/**/*'` would add the layout to every page within the contact folder. 
2. *layout*: A string specifying the path to the layout (relative to the source folder) and which block in the layout should be used.

Here is an example, which sets up a default layout, a layout for all documentation, and also specifies a particular page with should not receive a layout:

```js
module.exports = function (acetate) {
  acetate.layout('**/*', 'layouts/_layout:main');
  acetate.layout('documentation/**/*', 'layouts/_documentation:content');
  acetate.layout('app.html', false);
};
```
