
var rootElement = document.getElementById('root');
var reactRoot = ReactDOM.createRoot(rootElement);

// const headerElm = React.createElement('h1', {}, "Hello!")
// const h2 = React.createElement('h2', {}, "from ReactJS")
// const div = React.createElement('div', {}, headerElm, h2)

var div = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Hello!'
    ),
    React.createElement(
        'h2',
        null,
        'from ReactJS'
    )
);
reactRoot.render(div);