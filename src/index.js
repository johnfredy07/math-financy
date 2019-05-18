import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'antd/dist/antd.css';
import * as serviceWorker from './serviceWorker';
import Layout from './pages/Layout';
import './styles/index.css';

const App = () => {
return(<Layout/>);
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
