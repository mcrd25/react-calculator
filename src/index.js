import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';

function Title(props) {
	return ( 
		<h1>{props.value}</h1>
	);
}

ReactDOM.render( <Title value='My React Calculator' />, document.getElementById('root'));

serviceWorker.unregister();
