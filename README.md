# Markdown for P2

## This fork

The [original plugin](http://wordpress.org/plugins/markdown-for-p2/) renders
markdown directly in php. For me, this was pretty limiting: I want math; I
want syntax highlighting in my codeblocks, etc. So I excised as much of the
rendering code as I could do in a short time, and replaced it with a call
to [pandoc](http://johnmacfarlane.net/pandoc/). The only other significant
change is the inclusion of relevant stylesheets and javascript.

### TODO

* this plugin needs an admin page, so you can specify the exact commandline
    * would allow use of other markdown converters (like
      [kramdown](http://kramdown.gettalong.org/))
    * would allow setting of specific options, which are currently
      hardcoded (meta-TODO: add a link)
* comments are saved as HTML, not in their original form. This is also true
  of the unmodified plugin.
* math in comments is not correctly transformed, or at least,
  [mathjax](http://www.mathjax.org/) doesn't think it is.

## Original README

Contributors: ryanimel
Tags: p2, markdown, formatting, comments
Requires at least: 3.0
Tested up to: 3.4.1
Stable tag: 0.1.1
License: GPLv2 or later

Markdown for P2 will enable Markdown formatting within your P2 theme status
updates and comments.

## Description

Markdown for P2 will enable Markdown formatting within your status updates and comments.

If you use P2 for any stretch of time you might find yourself in a situation
where you start typing out HTML. Since posting from P2 happens (or should)
entirely from the front end of the theme, by default formatting options aren't
available. So if you want to format a list, let's say, you might be tempted to
start typing out <code>ul</code> and <code>li</code> tags. Or perhaps add
formatting buttons that might clutter up the interface.

Markdown for P2 is another option, and will allow you to use the Markdown
format when you post to P2. Learn more about Markdown [at John Gruber's
site](http://daringfireball.net/projects/markdown/).

## Kudos

* [Markdown](http://daringfireball.net/projects/markdown/), of course, is a
  John Gruber production.
* This plugin is almost entirely the work of [Michel
  Fortin](http://michelf.com/projects/php-markdown/) (released under the GPL,
  his copyright is included in the file), but wasn't bundled into a neat plugin
  on WordPress dot org, and not specifically for this purpose. The credit for
  that code goes to&hellip;
* Markdown support added using Adam Backstrom's code via this [Github
  Gist](https://gist.github.com/1561020).
* Markdown logo (in banner image) credit to [Dustin
  Curtis](http://dcurt.is/the-markdown-mark). Lovely, isn't it?

## Note

_Technically_ this plugin will work with any WordPress site -- it simply checks
the_content and comment_text for Markdown -- but this plugin is really only
tested with P2. If you're interested in using Markdown on your non-P2 blog, I'd
recommend [Markdown on
Save](http://wordpress.org/extend/plugins/markdown-on-save/) which I think will
provide a better user experience in that situation.

== Installation ==

Upload the Markdown for P2 plugin to your blog or install it automatically via
the dashboard. Activate it and enjoy typing in Markdown.

== Changelog ==

= 0.1 =
* Pulled together the first functioning plugin. It could be fixed up bit I'm
  sure, but this works for a first version.
* Released July 5, 2012
