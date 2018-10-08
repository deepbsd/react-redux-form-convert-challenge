import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import store from './store';
import ContactForm from './components/contact-form';
import { Values } from "redux-form-website-template";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <div className="wrapper">
            <h2>Contact Form</h2>
            <ContactForm />
            <Values form="contact" />
        </div>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
