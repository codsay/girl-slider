document.getElementById('slide').onload = function() {
  var frame = frames['slide'];
  var css = '.load-item { display: none !important; }',
  style = frame.document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  var head = frame.document.head || frame.document.getElementsByTagName('head'[0]);
  head.appendChild(style);
}
