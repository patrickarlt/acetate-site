---
title: Global Variables
topic: Configuration
order: 70
---

If you need to set up global variables which can be used on any page, you can use the `acetate.global()` method. `global` accepts two arguments:

1. *name*: String representing the name the global data should be available under.
2. *data*: The actual data to make available

In this example, we'll just add an email address that we need on lots of pages. Inside your `acetate.conf.js` file, that might look like this:

```
module.exports = function (acetate) {
  acetate.global('email', 'awesome@possum.com');
};
```

Now in any of your pages you can retreive that string under whatever name you saved it as, in this case `{{email}}`.
