var $body = $('body');
var $html = $('html');

$body.on('keydown', function () {
  var $ballAppear = $('<div>');

  $body.append($ballAppear);
  $ballAppear.addClass('ball');
  $ballAppear.css('left, Math.random()');
  $ballAppear.css('top, Math.random()');
});

// Math.random()
// \.css\('left')
