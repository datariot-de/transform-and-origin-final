(function($) {

  var $transformOriginIndicator = $('#transform-origin-indicator');
  var $elementTransformed       = $('#element-transformed');

  var $transformOriginX         = $('#transform-origin-x');
  var $transformOriginY         = $('#transform-origin-y');

  var $transform                = $('#transform');
  var $transformVal1            = $('#transform-val-1');
  var $transformVal2            = $('#transform-val-2');

  $transformOriginX.change(function(event) {
    var selectVal = $transformOriginX.val();

    var left = '50%';
    switch (selectVal) {
      case 'left':
        left = '0';
        break;
      case 'center':
        break;
      case 'right':
        left = '100%';
        break;
      default:
        left = selectVal;
    }
    $transformOriginIndicator.css('left', left);
    $elementTransformed
      .addClass('transition-none')
      .css('transform', 'none');
  }).trigger('change');

  $transformOriginY.change(function(event) {
    var selectVal = $transformOriginY.val();

    var top = '50%';
    switch (selectVal) {
      case 'top':
        top = '0';
        break;
      case 'center':
        break;
      case 'bottom':
        top = '100%';
        break;
      default:
        top = selectVal;
    }
    $transformOriginIndicator.css('top', top);
    $elementTransformed
      .addClass('transition-none')
      .css('transform', 'none');
  }).trigger('change');

  $('form').submit(function(event) {
    event.preventDefault();
    $elementTransformed
      .css('transform-origin', $transformOriginX.val() + ' ' + $transformOriginY.val())
      .removeClass('transition-none');

    var transform = $transform.val();
    var transformVal;

    switch(transform) {
      case 'rotate':
        transformVal = $transformVal1.val();
        break;
      case 'scale':
        transformVal  = $transformVal1.val() != '' ? $transformVal1.val() : '1';
        transformVal += ',';
        transformVal += $transformVal2.val() != '' ? $transformVal2.val() : '1';
        break;
      default:
        transformVal  = $transformVal1.val() != '' ? $transformVal1.val() : '0';
        transformVal += ',';
        transformVal += $transformVal2.val() != '' ? $transformVal2.val() : '0';
    }

    if(transform == 'rotate') {

    } else {

    }

    $elementTransformed.css('transform', transform + '(' + transformVal + ')');

  });

})(jQuery);
