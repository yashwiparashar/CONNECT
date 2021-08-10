'use strict';

console.log('app.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'This is jsx dudey '
    ),
    React.createElement(
        'h1',
        null,
        'Do it bro'
    )
);
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'INDECISION APP'
    ),
    React.createElement(
        'p',
        null,
        'Put your life in the hands of a computer'
    ),
    React.createElement(
        'p',
        null,
        'Here are your options',
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'Item One'
            ),
            React.createElement(
                'li',
                null,
                'Item Two'
            )
        )
    )
);

var app = {
    title: 'brooo',
    subtitle: 'no broini1',
    options: ['one', 'two']
};
function Sub(subtitle) {
    if (subtitle) {
        return React.createElement(
            'p',
            null,
            'Subtitle:',
            subtitle
        );
    }
}
var count = 0;
var addOne = function addOne() {
    console.log("add one");
};
var template4 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count:',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    )
);

var template3 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'app.title'
    ),
    React.createElement(
        'p',
        null,
        app.subtitle && Sub(app.subtitle)
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);
var approot = document.getElementById('app');
ReactDOM.render(template4, approot);
