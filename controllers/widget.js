$.create = function(e) {
  //Use Alloy builtin Animation
  var animation = require('alloy/animation');

  // Max & Min value from Width and Height of our clicked view.
  // This way we can make the circle big enough to fit the view.
  var maxHeightWidth = Math.max(e.source.toImage().width, e.source.toImage().height);
  var minHeightWidth = Math.min(e.source.toImage().width, e.source.toImage().height);

  // Our circle that will be scaled up using 2dMartix.
  $.ripple.applyProperties({
    "borderRadius": minHeightWidth / 2,
    "height": minHeightWidth,
    "width": minHeightWidth
  });

  // Add the ripple view inside the clicked view
  e.source.add($.ripple);

  // Use chainAnimate to sequence the animation steps.
  // We'll position the view at the center of the click position, by using the center property).
  animation.chainAnimate($.ripple, [
    // Trying to follow https://github.com/FezVrasta/bootstrap-material-design/blob/master/dist/css/ripples.css#L28
    Ti.UI.createAnimation({
      "center": {
        x: (OS_IOS) ? e.x : (e.x / Ti.Platform.displayCaps.logicalDensityFactor),
        y: (OS_IOS) ? e.y : (e.y / Ti.Platform.displayCaps.logicalDensityFactor),
      },
      "duration": 0,
      "opacity": 0.3,
      "transform": Ti.UI.create2DMatrix().scale(20 / maxHeightWidth)
    }),
    Ti.UI.createAnimation({
      "curve": Ti.UI.ANIMATION_CURVE_EASE_IN,
      "duration": 350,
      "transform": Ti.UI.create2DMatrix().scale((maxHeightWidth * 2) / minHeightWidth)
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
