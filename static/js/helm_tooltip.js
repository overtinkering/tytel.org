/**
 *
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2015 Matt Tytel
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

$(document).ready(function() {
  $('#sticker-suggest').tooltipster({
    content: $('<span><img id="sticker-tooltip" src="/static/images/helm_sticker.png" /></span>'),
    position: 'bottom',
  });

  $('.sticker-order').tooltipster({
    content: $('<span><img id="sticker-tooltip" src="/static/images/helm_sticker.png" /></span>'),
    position: 'left',
    offsetY: 110,
  });
});
