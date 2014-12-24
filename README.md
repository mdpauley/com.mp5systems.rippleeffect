# com.mp5systems.rippleeffect

Alloy Titanium widget to display an in-app notification.

The widget is a tiny view that comes from the top with a simple animation.

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

```js

// Show the widget setting the title
Notifier.show('Hello, world!');

// Show the widget, and override defaults
Notifier.show({
    message: 'Notification Test',
    icon: '/appicon.png',
    pushForce: 10,
    duration: 2500,
    click: function(){ alert("OH, you clicked me!\nDo you think I'm weird?"); }
    });

    // Hide
    Notifier.hide();

    ```

    #### Fully stylable via TSS

    Override this options in your `app.tss`.

    ```json
    ".caffeinaToastView":{
        "top": 0,
        "backgroundColor": '#A000',
        "height": 65,
        "touchEnabled": false
        },
        ".caffeinaToastIcon":{
            "left": 8,
            "height": 42
            },
            ".caffeinaToastLabel":{
                "touchEnabled": false,
                "left": 60,
                "right": 10,
                "height": 60,
                "color": '#fff',
                "textAlign": 'left',
                "font": {
                    "fontSize": 14
                }
            }
            ```

            #### Work with Android or iOS modal Windows

            On Android is not possible to make it work with Windows.

            On iOS, with modal Windows, in not possible to open a non-modal window in front of another modal window.

            So, to make it work with theese two cases, use the `view` property on open:

            ```js
            Notifier.show({
                view: /* Your Window */
                });
                ```

                ## Contributing

                How to get involved:

                1. [Star](https://github.com/CaffeinaLab/Ti.Notifications/stargazers) the project!
                2. Answer questions that come through [GitHub issues](https://github.com/CaffeinaLab/Ti.Notifications/issues?state=open)
                3. [Report a bug](https://github.com/CaffeinaLab/Ti.Notifications/issues/new) that you find

                Pull requests are **highly appreciated**.

                Solve a problem. Features are great, but even better is cleaning-up and fixing issues in the code that you discover.

                ## Copyright and license

                Copyright 2014 [Caffeina](http://caffeinalab.com) srl under the [MIT license](LICENSE.md).
