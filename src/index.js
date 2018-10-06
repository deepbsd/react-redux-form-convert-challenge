import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import ContactForm from './components/contact-form';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ContactForm />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
