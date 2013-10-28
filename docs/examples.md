## Default

To simplify might do something like:

```js
grunt.initConfig({
  wp2md: {
    default_options: {
      files: {
        'path/to/': ['wordpress.xml'],
      },
    },
  }
});
```

## Custom

```js
grunt.initConfig({
  wp2md: {
    custom_options: {
      options: {
        format: ''
      },
      files: {
        'tmp/custom_options/': ['test/fixtures/*.xml'],
      },
    },
  }
});
```