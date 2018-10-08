import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = props =>  {
    return(
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <Field
                    component="input"
                    name="name"
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field
                    component="input"
                    name="email"
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <Field
                    component="input"
                    name="message"
                    type="textarea"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default reduxForm({
  form: 'contact'
})(ContactForm)
