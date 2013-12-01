# grunt-wp2md [![NPM version](https://badge.fury.io/js/grunt-wp2md.png)](http://badge.fury.io/js/grunt-wp2md)  [![Build Status](https://travis-ci.org/hariadi/grunt-wp2md.png)](https://travis-ci.org/hariadi/grunt-wp2md)

> Convert WordPress XML to static Markdown files.

## Getting Started
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```bash
npm install grunt-wp2md --D
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-wp2md');
```

### The "wp2md" task

#### Overview
In your project's Gruntfile, add a section named `wp2md` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  wp2md: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```



## Options
### format
Type: `String`  
Default value: `'yyyy-mm-dd'`

Add date prefix name to markdown generated file. Example: 2013-11-27-filename.md

### posts
Type: `String`  
Default value: `'_posts'`

Posts destination folder

### drafts
Type: `String`  
Default value: `'_drafts'`

Drafts destination folder

### pages
Type: `String`  
Default value: `''`

Pages destination folder


## Usage Examples
### WordPress XML

Export your content in "Tools" → "Export" → "WordPress" in your WordPress dashboard and put XML file to /path/to/wordpress.xml

![wpxml](https://f.cloud.github.com/assets/376635/1417781/bb434810-3f9d-11e3-8d0d-4e54ff5a2717.jpg)

### Default

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

### Custom

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

#### Output 
![wp2md-output](https://f.cloud.github.com/assets/376635/1417782/cf624580-3f9d-11e3-9321-6bbd5527554f.jpg)


## Author

**Hariadi Hinta**

+ [github.com/hariadi](https://github.com/hariadi)
+ [twitter.com/hariadi](http://twitter.com/hariadi)

## Release History

 * 2013-11-25   v0.1.3   Use external library for async and lodash for great performance. Upgrade Grunt 0.4.2
 * 2013-07-29   v0.1.2   Add destination options to posts, drafts and pages.
 * 2013-07-28   v0.1.1   Documentation tweaks. Add Travis.
 * 2013-10-27   v0.1.0   Initial

## License
Copyright (c) 2013 Hariadi Hinta, contributors.
Released under the MIT license