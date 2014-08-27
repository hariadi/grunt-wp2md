/*
 * grunt-wp2md
 * https://github.com/hariadi/grunt-wp2md
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var fs = require('fs'),
      path = require('path'),
      xml2js = require('xml2js'),
      parser = new xml2js.Parser(),
      _ = require('lodash'),
      async = require('async'),
      tomd = require('to-markdown').toMarkdown;

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  grunt.registerMultiTask('wp2md', 'Convert WordPress XML to static Markdown files.', function() {

    var next = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      format: 'yyyy-mm-dd',
      posts: '_posts',
      drafts: '_drafts',
      pages: ''
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join(grunt.util.normalizelf(grunt.util.linefeed));

      var source;
      parser.parseString(src, function (err, result) {
        grunt.verbose.writeln('>> Parsing XML: ' + f.src[0].cyan);
        source = result;
      });

      var content,
          filename,
          length = 0,
          arr = source.rss.channel[0].item;

      async.forEach(arr, function(item, next){
        var postTitle   = item.title[0],
            postId      = item['wp:post_id'][0],
            postDate    = item['wp:post_date'][0],
            postName    = item['wp:post_name'][0],
            postContent = item['content:encoded'][0],
            postComment = item['wp:comment_status'][0] === 'open' ? true : false;

        if (_.isObject(postTitle)) {
          postTitle = '';
        }
        // Get postTitle if postName blank. Otherwise use postId
        if (!postName || _.isObject(postName)) {
          postName = postTitle ? grunt.util._.str.slugify(postTitle) : postId;
        }

        postContent = _.isObject(postContent) ? '' : tomd(postContent);
        postContent = postContent.replace(/\r\n/g, '\n');

        switch (item['wp:post_type'][0]){
          case 'post':
            length++;

            var postStatus = item['wp:status'][0] === 'publish' ? options.posts : options.drafts,
              cats = item.category,
              categories = [],
              postTag = [];

            _.each(cats, function(item){
              if (!_.isString(item)){
                switch(item.$.domain){
                  case 'post_tag':
                    postTag.push(item._);
                    break;
                  case 'category':
                    categories.push(item._);
                    break;
                }
              }
            });

            if (postTag.length) {
              postTag = '\n- ' + _.uniq(postTag).join('\n- ');
            }
            if (categories.length) {
              categories = '\n- ' + _.uniq(categories).join('\n- ');
            }

            content = [
              '---',
              'title: "' + postTitle.replace(/"/g, '\\"') + '"',
              'id: ' + postId,
              'date: ' + postDate,
              'tags: ' + (postTag ? postTag : ''),
              'categories: ' + (categories || 'uncategory'),
              '---'
            ];

            filename = (options.format && postDate) ? grunt.template.date(postDate, options.format) + '-' + postName : postName;

            grunt.file.write(path.join(f.dest, postStatus, filename +
              '.md'), content.join('\n') +
              '\n\n' + postContent);
            break;

          case 'page':
            length++;

            content = [
              '---',
              'title: ' + postTitle,
              'date: ' + postDate,
              '---'
            ];

            grunt.file.write(path.join(f.dest, options.pages, postName + '/index.md'), content.join('\n') +
              '\n\n' + postContent);
            break;

          default:
            next();
        }
      }, function(err){
        if (err) {throw err;}
        next(null, length);
      });

      grunt.log.writeln('>>'.green + ' Done converting to ' + f.dest.cyan);
      next();
    });
  });
};
