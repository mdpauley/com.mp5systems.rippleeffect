$.create = function(e) {
  //Use Alloy builtin Animation
  var animation = require('alloy/animation');

  // Max value from Width and Height of our clicked view.
  // This way we can make the circle big enough to fit the view.
  var heightWidth = (Math.max(e.source.toImage().width, e.source.toImage().height) * 2);

  // Our circle that will be scaled up using 2dMartix.
  // We'll position the view at the center of the click position, by using the center property).
  $.ripple.applyProperties({
    "width": heightWidth,
    "height": heightWidth,
    "borderRadius": heightWidth / 2,
    "transform": Ti.UI.create2DMatrix().scale(20 / heightWidth),
    "center": {
      x: e.x,
      y: e.y
    }
  });

  // Add the ripple view inside the clicked view
  e.source.add($.ripple);

  // Use chainAnimate to sequence the animation steps.
  animation.chainAnimate($.ripple, [
    // Trying to follow https://github.com/FezVrasta/bootstrap-material-design/blob/master/dist/css/ripples.css#L28
    Ti.UI.createAnimation({
      "opacity": 0.3,
      "duration": 0
    }),
    Ti.UI.createAnimation({
      "transform": Ti.UI.create2DMatrix().scale(2.0),
      "duration": 350,
      "curve": Ti.UI.ANIMATION_CURVE_EASE_IN
    }),
    Ti.UI.createAnimation({
      "opacity": 0.0,
      "duration": 100,
      "curve": Ti.UI.ANIMATION_CURVE_LINEAR
    })
  ], function() {
    e.source.remove($.ripple);
  });
};
