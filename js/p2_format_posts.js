// When the document loads, or when a comment or post is changed, we
// must re-format the HTML that our markdown conversion has produced.
//
// The ajaxSuccess listener is pretty promiscuous. It fires every
// time there's any ajax call, and many of them, we don't care about.
// This doesn't matter as long as we don't have huge pages full of
// expensive to render MathJax, but it's a possible target for future
// optimization

jQuery( document ).ready( p2FormatPosts );

jQuery( document ).ajaxSuccess( function(e) {
  // console.log(e);
  p2FormatPosts();
});

var p2FormatPosts = function() {
  hljs.initHighlighting.called = false;
  hljs.initHighlighting();
  MathJax.Hub.Queue(['Typeset',MathJax.Hub]);
}
