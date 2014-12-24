# com.mp5systems.rippleeffect

Alloy Titanium widget to display Google Material ripple effect. This is completely based on a [library](http://www.saucer.dk/recreating-googles-ripple-effect-for-ios/) from [@Saucerdk](https://twitter.com/Saucerdk).

![image](http://www.saucer.dk/wp-content/uploads/screen_demo.gif)

## Installation

#### Via Gittio

```
gittio install com.mp5systems.rippleeffect
```

#### Via Github

Download the latest release and add in your *config.json*, under `dependencies`:

```json
"dependencies": {
    "com.mp5systems.rippleeffect": "*"
}
```

#### Require

```js
var rippleEffect = Alloy.createWidget('com.mp5systems.rippleeffect');
```

#### Usage

Add the *rippleEffect* property to your element.
```js
"#redView":{
    width: "100%",
    height: 150,
    backgroundColor: "red",
    top: 0,
    left: 0,
    rippleEffect: true
}
```

```js
// Add Eventlistener to the window
$.index.addEventListener("click",function(e){
    if(e.source.rippleEffect){
        // Here we'll pass the clicked object to our animation handler.
        rippleEffect.create(e);
    }
});

```
