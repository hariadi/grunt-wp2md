# grunt-wp2md [![NPM version](https://badge.fury.io/js/grunt-wp2md.png)](http://badge.fury.io/js/grunt-wp2md)  [![Build Status](https://travis-ci.org/hariadi/grunt-wp2md.png)](https://travis-ci.org/hariadi/grunt-wp2md)

> Convert WordPress XML to static Markdown files.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```bash
npm install grunt-wp2md --save
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


## Usage Examples
### Default

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

### Custom

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


## Author

**Hariadi Hinta**

+ [github.com/hariadi](https://github.com/hariadi)
+ [twitter.com/hariadi](http://twitter.com/hariadi)

## Release History

 * 2013-07-28   v0.1.1   Documentation tweaks. Add Travis.
 * 2013-10-27   v0.1.0   Initial

## License
Copyright (c) 2013 Hariadi Hinta, contributors.
Released under the MIT license