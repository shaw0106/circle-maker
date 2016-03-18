var $body = $('body');
var $html = $('html');

$body.on('keydown', function () {
  var $ballAppear = $('<div>');

  $body.append($ballAppear);
  $ballAppear.addClass('ball');
  $ballAppear.css('left', Math.random() * 500);
  $ballAppear.css('top', Math.random() * 500);
});
