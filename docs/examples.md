## WordPress XML

Export your content in "Tools" → "Export" → "WordPress" in your WordPress dashboard and put XML file to /path/to/wordpress.xml

![wpxml](https://f.cloud.github.com/assets/376635/1417781/bb434810-3f9d-11e3-8d0d-4e54ff5a2717.jpg)

## Default

To simplify might do something like:

```js
grunt.initConfig({
  wp2md: {
    default_options: {
      files: {
        'path/to/': ['/path/to/wordpress.xml'],
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
        format: '',
        posts: 'src/_posts',
        drafts: 'src/_drafts',
        pages: 'src/pages'
      },
      files: {
        'tmp/custom_options/': ['test/fixtures/*.xml'],
      },
    },
  }
});
```

### Output 
![wp2md-output](https://f.cloud.github.com/assets/376635/1417782/cf624580-3f9d-11e3-9321-6bbd5527554f.jpg)