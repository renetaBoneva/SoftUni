
const rootElement = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(rootElement);

// const headerElm = React.createElement('h1', {}, "Hello!")
// const h2 = React.createElement('h2', {}, "from ReactJS")
// const div = React.createElement('div', {}, headerElm, h2)

const div = (
    <div>
        <h1>Hello!</h1>
        <h2>from ReactJS</h2>
    </div>
);
reactRoot.render(div);